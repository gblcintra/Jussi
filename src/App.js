import { BrowserRouter } from 'react-router-dom';


// Import Routes
import Routes from './routes';
// End Import Routes



export default function App() {
    return (
        <BrowserRouter>  
            {/* <div className="container"> */}
                <Routes/>
            {/* </div>      */}
        </BrowserRouter>
    );
}