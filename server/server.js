require('dotenv').config();

const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

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
    const { data, error } = await supabase
      .from('payments')
      .insert([
        { razorpay_payment_id, razorpay_order_id, razorpay_signature, name, amount }
      ]);

    if (error) {
      console.error('Error inserting payment details:', error);
      throw error;
    }

    res.status(200).json({ message: 'Payment details stored successfully', data });
  } catch (error) {
    console.error('Error storing payment details:', error);
    res.status(500).json({ error: 'Error storing payment details', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
