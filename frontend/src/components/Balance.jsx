import { useEffect, useState } from 'react';
import axios from 'axios';

export const Balance = ({ value, username }) => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        // Function to fetch balance when component mounts
        const fetchBalance = async () => {
            try {
                // Retrieve the authentication token from localStorage (or any other storage mechanism)
                const authToken = localStorage.getItem('token');

                // Make the API request with the authentication token included in the headers
                const response = await axios.get("https://rapid-pay.vercel.app/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        //  userid: username
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        fetchBalance(); // Call the function to fetch balance when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <div className="">
            <div>Your Balance: {balance !== null ? balance : 'Loading...'} </div>
            <span>{username.slice(0, username.indexOf('@'))}</span>
        </div>
    );
};
