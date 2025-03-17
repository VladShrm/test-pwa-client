import './App.css'
import LoginButton from "./components/login.jsx";
import VerifyButton from "./components/verify.jsx";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker зареєстровано:', registration);
            })
            .catch((error) => {
                console.log('Помилка реєстрації Service Worker:', error);
            });
    });
}


function App() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            padding: '20px',
            backgroundColor: '#f4f4f4',
            gap: '20px'
        }}>
            <LoginButton/>
            <VerifyButton/>
        </div>
    );
}

export default App;
