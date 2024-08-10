import React, { useEffect, useState } from 'react';
import supabase from './supabaseClient';
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
        const { data, error } = await supabase
          .from('payments')
          .select('id, name, amount')
          .order('created_at', { ascending: false })
          .range((currentPage - 1) * paymentsPerPage, currentPage * paymentsPerPage - 1);

        if (error) throw error;
        
        // Update hasMore based on fetched data
        if (data.length < paymentsPerPage) {
          setHasMore(false); // No more payments to fetch
        } else {
          setHasMore(true); // There might be more payments to fetch
        }

        setPayments(data);
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
        <button onClick={prevPage} className="pagination-button" disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} className="pagination-button" disabled={!hasMore}>Next</button>
      </div>
    </div>
  );
};

export default Payments;
