const LoginButton = () => {
    const login = async () => {
        const response = await fetch('https://test-pwa-server.onrender.com/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: 'test', password: 'test' })
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <button onClick={login}>Login</button>
    );
};

export default LoginButton;
