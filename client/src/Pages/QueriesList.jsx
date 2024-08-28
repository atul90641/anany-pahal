import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const QueriesList = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formStates, setFormStates] = useState({}); // Store form open state for each query
    const [messages, setMessages] = useState({});
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await axios.get('https://anany-pahal-client.vercel.app/api/queries');
                setQueries(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchQueries();
    }, []);

    const handleButtonClick = (queryId) => {
        setFormStates((prevStates) => ({
            ...prevStates,
            [queryId]: true, // Open the form for the specific query
        }));
    };
    const handleMessageChange = (e, queryId) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [queryId]: e.target.value, // Update the message for the specific query
        }));
    };

    const handleSubmit = async (e, queryId, email, name) => {
        e.preventDefault();
        const message = messages[queryId]; // Get the message from the state
        // Logic to send a message to the query's email
        const templateParams = {
            to_name: name,
            to_email: email,
            message: message,

        };
        const service_id = import.meta.env.VITE_SERVICE_ID_QUERY;
        const template_id = import.meta.env.VITE_TEMPLATE_ID_QUERY;
        const user_id = import.meta.env.VITE_USER_ID;
        await emailjs.send(service_id, template_id, templateParams, user_id)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                console.log('Message has been sent to your email address.');
            }, (err) => {
                console.error('FAILED...', err);
            });
        alert(`Message sent to ${email}`);

        
        try {
            const response = await axios.post('https://anany-pahal-server.vercel.app/api/update-query', {
                queryId,
                message
            });

            if (response.status === 200) {
                // Close the form after successful submission
                setFormStates((prevStates) => ({
                    ...prevStates,
                    [queryId]: false,
                }));
            } else {
                throw new Error(response.data.error || 'Failed to update query status.');
            }
        } catch (error) {
            console.error('Error updating query status:', error);
            setError('Failed to update query status. Please try again.');
            alert('Failed to update query status. Please try again.');
        } finally {
            setLoading(false);
        }
        window.location.reload();
    };


    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    if (queries.length === 0) {
        return <p className="no-queries">No queries found.</p>;
    }

    return (
        <div className="queries-list-container">
            <h2>Queries</h2>
            <table className="queries-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {queries.map((query) => (
                        <React.Fragment key={query.id}>
                            <tr>
                                <td data-label="Id">{query.id}</td>
                                <td data-label="Name">{query.name}</td>
                                <td data-label="Email">{query.email}</td>
                                <td data-label="Mobile">{query.mobile}</td>
                                <td data-label="Message">{query.message}</td>
                                <td data-label="Status">{query.resolved === "resolved" ? "Resolved" : "Unresolved"}</td>
                                <td data-label="Action">
                                    <button
                                        className='sign-in-button'
                                        onClick={() => handleButtonClick(query.id)}
                                        style={{
                                            backgroundColor: query.resolved === "resolved" ? '#28a745' : '#007bff', // Green color if not resolved, blue if resolved
                                            cursor: query.resolved === "resolved" ? 'not-allowed' : 'pointer', // Disable cursor if resolved
                                        }}
                                        disabled={query.resolved === "resolved"} // Ensure button is disabled
                                    >
                                        {query.resolved === "resolved" ? "Taken" : "Pending"}
                                    </button>
                                </td>
                            </tr>

                            {/* Conditional form rendering when "Pending" */}
                            {formStates[query.id] && (
                                <tr>
                                    <td colSpan="7">
                                        <form onSubmit={(e) => handleSubmit(e, query.id, query.email, query.name)}>
                                            <h4>Send a Message to {query.name}</h4>
                                            <textarea
                                                required
                                                placeholder="Write your message here"
                                                rows="4"
                                                value={messages[query.id] || ''}
                                                onChange={(e) => handleMessageChange(e, query.id)}
                                            ></textarea>
                                            <br />
                                            <button type="submit" className="submit-button">Send Message</button>
                                        </form>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QueriesList;
