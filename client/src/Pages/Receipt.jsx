import React, { useEffect, useState } from 'react';
import supabase from './supabaseClient'; // Adjust the path accordingly
import emailjs from 'emailjs-com';
import { jsPDF } from 'jspdf';

const Receipt = ({ formData }) => {
    const [paymentData, setPaymentData] = useState({ id: 0, name: '', amount: 0, date: '' });

    useEffect(() => {
        const fetchPaymentData = async () => {
            const { data, error } = await supabase
                .from('payments')
                .select('id, name, amount, created_at')
                .order('created_at', { ascending: false })
                .limit(1);

            if (error) {
                console.error('Error fetching payment data:', error);
            } else if (data.length > 0) {
                const payment = data[0];
                setPaymentData({
                    id: payment.id,
                    name: payment.name,
                    amount: payment.amount,
                    date: new Date(payment.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }) // Format the date as needed
                });
            }
        };

        fetchPaymentData();
    }, [formData.paymentId]);

    const handleReload = () => {
        window.location.reload();
    };


    const handlePrint = (e) => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Receipt</title>');
        printWindow.document.write('<link rel="stylesheet" type="text/css" href="print.css">'); // Ensure this path is correct
        printWindow.document.write('</head><body >');
        printWindow.document.write(document.querySelector('.printable').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();

        // Add an event listener for the 'afterprint' event
        printWindow.onafterprint = function () {
            printWindow.close();
        };

        // Trigger print dialog
        printWindow.print();


        e.preventDefault();

        const templateParams = {
            to_name: paymentData.name,
            user_email: formData.email,  // Ensure this is the recipient's email
            donation_date: paymentData.date,
            receipt_no: paymentData.id,
            donor_name: paymentData.name,
            donor_address: formData.address,
            id_number: formData.idNumber,
            id_type: formData.idType,
            donor_email: formData.email,
            donor_mobile: formData.mobile,
            donor_whatsapp: formData.whatsapp,
            donation_amount: paymentData.amount,
            donation_amount_words: convertAmountToWords(paymentData.amount),

        };

        emailjs.send('service_85q6s9j', 'template_bdj4drq', templateParams, '6MgSXLdVK0DRq8I7D')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.error('FAILED...', err);
            });
    };

    return (
        <div className="printable" >
            {/* Logo Image */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src="/logo.jpg" alt="Logo" style={{ width: '100px', opacity: 0.8 }} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2>Anany Pahal Foundation</h2>
                <p>Teela Shiv Ganj <br />
                    Mauranipur Jhansi<br />
                    State Name : Uttar Pradesh, India (284204)<br />
                    E-Mail : ananypahal0806021@gmail.com
                </p>
            </div>

            <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Donation Receipt</h3>

            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <div>Receipt No : <strong>{paymentData.id}</strong></div>
                <div>Date: <strong> {paymentData.date} </strong></div>
            </div>

            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ flex: 1, borderRight: '1px solid #ddd', paddingRight: '10px', marginRight: '10px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Received with thanks from :</strong> {paymentData.name}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Address of Donor :</strong> {formData.address}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Bearing ID no. and Type :</strong> {formData.idNumber} ({formData.idType})
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Email-id of Donor :</strong> {formData.email}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Contact No. of Donor :</strong> {formData.mobile}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Whatsapp No. of Donor :</strong> {formData.whatsapp}
                    </div>
                </div>

                <div style={{ flex: 1, paddingLeft: '10px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>The sum of Rs. :</strong> {paymentData.amount}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>in words :</strong> {convertAmountToWords(paymentData.amount)} Only.
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Towards :</strong> Others
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>by mode of :</strong> Electronic modes including account payee Cheque /Draft # Dated:{paymentData.date}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Eligible for deduction's Section :</strong> Section 35(1)(ii)
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Our Income Tax Unique Registration No. & Date :</strong> ABCD12345A012546 31-Jul-21
                    </div>
                </div>
            </div>

            <div style={{ marginRight: '60%', marginTop: '20px', fontSize: '12px' }}>
                <p><strong>Terms & Conditions</strong></p>
                <ol>
                    <li>Cheque/DD is Subject to realisation</li>
                    <li>Our Registration No.:SDHJ2021\10</li>
                </ol>
            </div>

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ textAlign: 'right' }}>
                    <p><strong>For Anany Pahal Foundation</strong></p>
                    <p>Authorised Signatory</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button
                    onClick={handlePrint}
                    style={{
                        width: '200px',
                        padding: '10px 20px',
                        backgroundColor: '#28a745', /* Green color */
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textAlign: 'center' /* Align text to the center for better look */
                    }}>
                    Print Receipt
                </button>
                <button
                    onClick={handleReload}
                    style={{
                        width: '200px',
                        padding: '10px 20px',
                        backgroundColor: '#007bff', /* Blue color */
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        textAlign: 'center' /* Align text to the center for better look */
                    }}>
                    Finish
                </button>
            </div>

        </div>
    );
};

// Utility function to convert number to words
const convertAmountToWords = (amount) => {
    const ones = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];

    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    const numberToWords = (num) => {
        if (num === 0) return 'Zero';

        let word = '';
        let index = 0;

        while (num > 0) {
            if (num % 1000 !== 0) {
                word = `${convertHundreds(num % 1000)} ${thousands[index]} ${word}`;
            }
            num = Math.floor(num / 1000);
            index++;
        }

        return word.trim();
    };

    const convertHundreds = (num) => {
        let word = '';

        if (num > 99) {
            word += `${ones[Math.floor(num / 100)]} Hundred `;
            num %= 100;
        }

        if (num > 19) {
            word += `${tens[Math.floor(num / 10)]} `;
            num %= 10;
        }

        if (num > 0) {
            word += ones[num] + ' ';
        }

        return word.trim();
    };

    return numberToWords(amount);
};

export default Receipt;
