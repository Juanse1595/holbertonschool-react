import { useContext } from 'react';
import AppContext from '../App/AppContext';
import './Footer.css';

function Footer() {
    const { user, logOut} = useContext(AppContext);
    return (
    <div className="App-footer">
        {user.isLoggedIn && <a href='#'>Contact us</a>}
        <p>Copyright 2020 - holberton School</p>
    </div>
    );
}

export { Footer }
