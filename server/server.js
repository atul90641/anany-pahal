require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

//middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.get('/', (req, res) => {
  res.send('Server is running fine!');
});


app.post('/create-order', async (req, res) => {
  const { amount, currency, receipt, name } = req.body;
  console.log('Received order data:', { amount, currency, receipt, name });

  if (!amount || !currency || !receipt || !name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const options = {
    amount: amount * 100, // amount in the smallest currency unit (paise for INR)
    currency,
    receipt
  };

  try {
    const order = await razorpay.orders.create(options);
    order.name = name;
    order.amount = amount;
    console.log('Created order:', order);
    res.json(order);
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ error: 'Error creating order', details: err.message });
  }
});

app.post('/store-payment-details', async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, name, amount } = req.body;
  console.log('Received payment details:', req.body);

  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !name || !amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const query = `INSERT INTO payments (name, amount, razorpay_payment_id, razorpay_order_id, razorpay_signature)
                   VALUES (?, ?, ?, ?, ?)`;

    const [result] = await db.execute(query, [
      name,
      amount,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature
    ]);

    console.log('Payment details stored successfully:', result);

    res.status(200).json({ message: 'Payment details stored successfully' });
  } catch (error) {
    console.error('Error storing payment details:', error);

    const errorDetails = error.message || 'No details available';
    res.status(500).json({ error: 'Error storing payment details', details: errorDetails });
  }
});


app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Check if the email already exists
    const [rows] = await db.execute('SELECT COUNT(*) AS count FROM subscribers WHERE email = ?', [email]);
    if (rows[0].count > 0) {
      return res.status(409).json({ error: 'Email already exists' }); // Conflict status code
    }

    // Insert new email into the database
    const query = 'INSERT INTO subscribers (email) VALUES (?)';
    const [result] = await db.execute(query, [email]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Email added successfully' });
    } else {
      throw new Error('Failed to add email');
    }
  } catch (error) {
    console.error('Error inserting email:', error);
    res.status(500).json({ error: 'An error occurred while adding the email', details: error.message });
  }
});

app.get('/api/queries', async (req, res) => {
  try {
      const [rows] = await db.execute('SELECT id, name, email, mobile, message, resolved FROM queries ORDER BY id');
      res.json(rows);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
  }
});


app.post('/api/update-query', async (req, res) => {
  const { queryId, message } = req.body;

  // Validate the input
  if (!queryId || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
      // Update the query with resolved and action
      const query = `UPDATE queries SET resolved = ?, action = ? WHERE id = ?`;
      const [result] = await db.execute(query, ['resolved', message, queryId]);

      // Check if the update was successful
      if (result.affectedRows > 0) {
          res.status(200).json({ message: 'Query updated successfully' });
      } else {
          res.status(404).json({ error: 'Query not found' });
      }
  } catch (error) {
      console.error('Error updating query status:', error);
      res.status(500).json({ error: 'An error occurred while updating the query', details: error.message });
  }
});

app.post('/api/create-query', async (req, res) => {
  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: 'All fields are required' });
  }

  try {
      const query = `INSERT INTO queries (name, email, mobile, message) 
                     VALUES (?, ?, ?, ?)`;
      const [result] = await db.execute(query, [name, email, mobile, message]);

      if (result.affectedRows > 0) {
          res.status(200).json({ message: 'Query created successfully' });
      } else {
          throw new Error('Failed to create query');
      }
  } catch (error) {
      console.error('Error creating query:', error);
      res.status(500).json({ error: 'An error occurred while creating the query', details: error.message });
  }
});

app.get('/api/payments', async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;

  const offset = (page - 1) * perPage;
  const limit = parseInt(perPage, 10);

  try {
      const query = `
          SELECT id, name, amount 
          FROM payments 
          ORDER BY created_at DESC 
          LIMIT ${limit} OFFSET ${offset}
      `;

      const [rows] = await db.execute(query);

      res.status(200).json(rows);
  } catch (error) {
      console.error('Error fetching payments:', error);
      res.status(500).json({ error: 'An error occurred while fetching payments' });
  }
});

app.get('/api/latest-payment', async (req, res) => {
  try {
      const query = `
          SELECT id, name, amount, created_at 
          FROM payments 
          ORDER BY created_at DESC 
          LIMIT 1
      `;
      const [rows] = await db.execute(query);

      if (rows.length > 0) {
          const payment = rows[0];
          res.status(200).json({
              id: payment.id,
              name: payment.name,
              amount: payment.amount,
              date: new Date(payment.created_at).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
              }),
          });
      } else {
          res.status(404).json({ message: 'No payments found' });
      }
  } catch (error) {
      console.error('Error fetching payment data:', error);
      res.status(500).json({ error: 'An error occurred while fetching payment data' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
