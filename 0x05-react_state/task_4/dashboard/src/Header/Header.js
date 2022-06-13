import logo from '../holberton-logo.jpg'
import { css, StyleSheet } from 'aphrodite';
import { useContext } from 'react';
import AppContext from '../App/AppContext';


function Header() {
    const { user, logOut } = useContext(AppContext);
    return (
        <>
            <div className={css(stylesHeader.header)}>
                <img src={logo} className={css(stylesHeader.logo)} alt="logo" />
                <h1 className={css(stylesHeader.h1)}>School dashboard</h1>
            </div>
            {user.isLoggedIn &&
            <section id='logoutSection'>Welcome {user.email} <em><a href='#' onClick={logOut}>(logout)</a></em></section>}
        </>
    );
}

const stylesHeader = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid #e2354e',
        color: '#e2354e'
    },
    h1: {
        display: 'inline',
        padding: '100px 0'
    },
    logo: {
        height: '30vh'
    }
})

export { Header }