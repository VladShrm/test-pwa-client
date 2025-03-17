import React, { useState } from 'react';

const VerifyButton = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const verify = async () => {
        try {
            const response = await fetch('https://test-pwa-server.onrender.com/api/me', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Unauthorized');
            }

            const data = await response.json();
            setUser(data.user);
            setError(null);
        } catch (err) {
            setError(err.message);
            setUser(null);
        }
    };


    return (
        <div>
            <button onClick={verify}>Verify</button>
            {user && <div>Welcome, {user}!</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default VerifyButton;
