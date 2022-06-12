import React from 'react';
import { Notifications } from '../Notifications/Notifications';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import PropTypes from 'prop-types';
import { CourseList } from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom';
import { BodySection } from '../BodySection/BodySection';
import { css, StyleSheet } from 'aphrodite';

const listCourses = [
    {'id': 1, 'name': 'ES6', 'credit': 60},
    {'id': 2, 'name': 'Webpack', 'credit': 20},
    {'id': 3, 'name': 'React', 'credit': 40}
]
const listNotifications = [
    {'id': 1, 'type': 'default', 'value': 'New course available'},
    {'id': 2, 'type': 'urgent', 'value': 'New resume available'},
    {'id': 3, 'type': 'urgent', 'html': {__html: getLatestNotification()}}
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
            user: {
                email: '',
                password: '',
                isLoggedIn: false
            },
            logOut: this.logOut
        }
    }
    handleDisplayDrawer = () => {
        this.setState({displayDrawer: true})
    }
    handleHideDrawer = () => {
        this.setState({displayDrawer: false})
    }
    logIn = (email, password) => {
        this.setState({
            user: {
                email: email,
                password: password,
                isLoggedIn: true
            }
        })
    }
    logOut = () => {
        this.setState({
            user: {
                email: '',
                password: '',
                isLoggedIn: false
            }
        })
    }
    render() {
        const { displayDrawer } = this.state;
        window.addEventListener('keypress', (event) => {
            if (event.key === 'h') {
                alert('Logging you out');
                this.logOut();
            }
        })
        window.removeEventListener('keypress', (event) => {
            if (event.key === 'm' && event.ctrlKey) {
                alert('Logging you out');
                this.logOut();
            }
        })
        return (
            <>
                <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}/>
                <div className={css(stylesApp.App)}>
                    <Header />
                    {this.state.user.isLoggedIn
                    ?
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseList listCourses={listCourses}/>
                    </BodySectionWithMarginBottom>
                    :
                    <BodySectionWithMarginBottom title="Log in to continue">
                        <Login logIn={this.logIn}/>
                    </BodySectionWithMarginBottom>
                    }
                    <Footer />
                </div>
                <BodySection title="News from the School">
                    <p>Some random text :3</p>
                </BodySection>
            </>
        );
    }
}

const stylesApp = StyleSheet.create({
    App: {
        fontFamily: 'Montserrat'
    }
})

App.defaultProps = {
    isLoggedIn: false,
    logOut: function() {}
}

App.propTypes = {
    logOut: PropTypes.func
}

export default App;
