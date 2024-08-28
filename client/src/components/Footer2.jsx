import React, { useState } from 'react';
import axios from 'axios';

const Footer2 = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const url = 'https://anany-pahal-server.vercel.app';
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const response = await axios.post(`${url}/api/subscribe`, { email });
      console.log('Server response:', response);
  
      if (response.status === 200) {
        setSuccess('Thank you for subscribing! Future updates will be shared with you by email');
        setEmail(''); // Clear the input field after successful submission
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      if(error.response.status === 409){
        setError('This email is already subscribed.');
      }
      else{
        setError('An error occurred. Please try again.');
        console.error('Error inserting email:', error);
      }
      
    } finally {
      setLoading(false);
    }
  };
  
  
  


  return (
    <section className="sponsors-subscribe">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 right-side">
            <div className="section-text">
              <h5>Connect With Us:</h5>
            </div>
            <div className="icon-links">
              <a href="https://www.facebook.com/AnanyPahal/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/anany_pahal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="Instagram.png" alt="Instagram" />
              </a>
              <a href="https://twitter.com/AnanyPahal?t=2rDqHZWM3av-Bg0b1l3qzw&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa fa-twitter" style={{ fontSize: 20 }}></i>
              </a>
              <a href="https://www.linkedin.com/in/anany-pahal-b39a4a219" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <form name="myFormnews" method="post" className="subscribe-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Newsletter'}
                </button>
              </div>
              {success && <p className="success-message">{success}</p>}
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
