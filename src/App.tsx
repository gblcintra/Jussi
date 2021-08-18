import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import Routes
import Routes from './routes';
// End Import Routes

export default function App() {
    return (
        <BrowserRouter>
            <ToastContainer/>
            <Routes />
        </BrowserRouter>
    );
}