import './App.css';
import { Notifications } from '../Notifications/Notifications';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footes';
import { Header } from '../Header/Header';

function App() {
    return (
        <>
            <Notifications />
            <div className='App'>
                <Header />
                <Login />
                <Footer />
            </div>
        </>
    );
}

export default App;
