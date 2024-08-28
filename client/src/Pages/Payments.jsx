import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../Payments.css';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // State to track if there are more payments

  const paymentsPerPage = 3;

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('https://anany-pahal-client.vercel.app/api/payments', {
          params: {
            page: currentPage,
            perPage: paymentsPerPage
          }
        });

        if (response.status === 200) {
          const data = response.data;

          // Update hasMore based on fetched data
          if (data.length < paymentsPerPage) {
            setHasMore(false); // No more payments to fetch
          } else {
            setHasMore(true); // There might be more payments to fetch
          }

          setPayments(data);
        } else {
          throw new Error('Failed to fetch payments');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (loading) return <div className="loading-message">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="payments-container">
      <h1 className="payments-heading">Recent Donations</h1>
      <ul className="payments-list">
        {payments.map((payment) => (
          <li key={payment.id} className="payment-item">
            <span className="payment-name">{payment.name}</span> - ₹{payment.amount}
          </li>
        ))}
      </ul>
      <div className="pagination-controls">
        <button onClick={prevPage} className="pagination-button" disabled={currentPage === 1}>
          &lt; {/* Represents the "<" symbol */}
        </button>
        <button onClick={nextPage} className="pagination-button" disabled={!hasMore}>
          &gt; {/* Represents the ">" symbol */}
        </button>
      </div>
    </div>
  );
};

export default Payments;
