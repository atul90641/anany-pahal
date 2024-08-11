import React, { useState } from 'react';
import Receipt from './Receipt';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    idType: '',
    idNumber: '',
    email: '',
    mobile: '',
    whatsapp: '',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true to display the receipt
  };

  const handleAutofill = () => {
    setFormData({
      idType: 'aadhaar',
      idNumber: 'XXXX XXXX 2345',
      email: 'xyz@gmail.com',
      mobile: '9876543210',
      whatsapp: '9876543210',
      address: 'E305 Block 12, XYZ colony, Jhansi, UP'
    });
  };

  // If the form has been submitted, only show the Receipt
  if (submitted) {
    return <Receipt formData={formData} />;
  }

  return (
    <div>


      <h2>Receipt Form</h2>

      <button
        type="button"
        onClick={handleAutofill}
        style={{ marginLeft: '80%', width: '100px', padding: '2px 6px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
      >
        Autofill
      </button>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="idType" style={{ display: 'block', marginBottom: '5px' }}>ID Type:</label>
          <select
            id="idType"
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid' }}
          >
            <option value="">Select ID Type</option>
            <option value="aadhaar">Aadhaar Card</option>
            <option value="pan">PAN Card</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="whatsapp">WhatsApp:</label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
