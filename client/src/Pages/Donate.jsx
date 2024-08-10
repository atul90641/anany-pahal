import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Payments from './Payments';

const Donate = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [order, setOrder] = useState(null);
  const [razorpayKey, setRazorpayKey] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const { data } = await axios.get('https://anany-pahal-server.vercel.app/get-razorpay-key');
        setRazorpayKey(data.key);
      } catch (error) {
        console.error('');
      }
    };
    fetchKey();

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log('');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      amount: amount , // Convert amount to paise
      currency: 'INR',
      receipt: 'order_rcptid_11',
      name: name
    };

    try {
      const response = await axios.post('https://anany-pahal-server.vercel.app/create-order', orderData);
      setOrder(response.data);
      redirectToPayment(response.data);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const redirectToPayment = (orderData) => {
    if (!window.Razorpay) {
      console.error('Razorpay SDK not loaded');
      return;
    }

    const options = {
      key: razorpayKey,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'Acme Corp',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: orderData.id,
      callback_url: 'https://anany-pahal-server.vercel.app/payment-callback',
      prefill: {
        name: name,
        email: 'example@example.com',
        contact: '9000090000'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
      },
      handler: function (response) {
        storePaymentDetails(response);
        setPaymentSuccess(true);
      },
      modal: {
        ondismiss: function() {
          if (!paymentSuccess) {
            alert('Payment was not completed');
          }
        }
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const storePaymentDetails = async (paymentDetails) => {
    const paymentData = {
      ...paymentDetails,
      name: name,
      amount: amount 
    };

    try {
      console.log('Sending payment details to server:', paymentData);
      const response = await axios.post('https://anany-pahal-server.vercel.app/store-payment-details', paymentData);
      console.log('Payment details stored:', response.data);
    } catch (error) {
      console.error('Error storing payment details:', error);
    }
  };

  return (
    <div>
      <div className="Donation">
        {!paymentSuccess ? (
          !order ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Enter name:
                  <input type="text" value={name} onChange={handleChangeName} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Enter amount:
                  <input type="number" value={amount} onChange={handleChangeAmount} />
                </label>
              </div>
              <button type="submit">Make Donation</button>
            </form>
          ) : (
            <div>Processing payment...</div>
          )
        ) : (
          <div className="thank-you-message">Thank you for your donation!<br/> <br/><br/><br/>Your contribution is changing lives for the better.</div>
        )}
      </div>
      <div>
        <Payments />
      </div>
    </div>
  );
};

export default Donate;
