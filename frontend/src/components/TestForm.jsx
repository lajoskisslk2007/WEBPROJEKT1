import api from "../api/axiosInstance";
import {useEffect, useState} from "react";

export default function TestForm() {
    const [message, setMessage] = useState('null');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/api/test');            
                setMessage(response.data);
            }
            catch (error) {
                console.error('Error fetching test data:', error);
                setMessage('Error fetching test data');
                
            }
        };

        fetchData();
    }
, []);
    return (
        <div>
            <h1>Test Form</h1>
            <p>Message: {message}</p>
        </div>
    );
}