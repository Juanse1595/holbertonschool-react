import React from "react";
import { NotificationItem } from "./NotificationItem";
import { getLatestNotification } from '../utils/utils';
import close_icon from './close-icon.png';
import PropTypes, { arrayOf } from "prop-types";
import { NotificationItemShape } from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }
    render() {
        return (
            <>
                <div className={css(stylesNotification.menuItem)}>
                    <p className={css(animationTitle.animation)} onClick={this.props.handleDisplayDrawer}>Your notifications</p>
                </div>
                { this.props.displayDrawer &&
                    <div className={css(stylesNotification.panel)}>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {this.props.listNotifications === [] && <NotificationItem type="default" value="No new notification for now"/>}
                            {this.props.listNotifications.map((notification) => <NotificationItem
                            key={notification.id}
                            type={notification.type}
                            value={notification.value}
                            html={notification.html}
                            markAsRead={this.markAsRead}
                            />)}
                        </ul>
                        <button style={{position: 'absolute',
                        top: 10,
                        right: 10,
                        background: 'none',
                        border: 'none'}}
                        aria-label='Close'
                        onClick={() => {
                            console.log('Close button has been clicked');
                            this.props.handleHideDrawer();
                        }}>
                            <img className={css(stylesNotification.closeIcon)} src={close_icon} alt='close-icon'></img>
                        </button>
                    </div>
                }
            </>
        );
    }
}

const stylesNotification = StyleSheet.create({
    menuItem: {
        textAlign: "right"
    },
    panel: {
        border: '1px dashed red',
        padding: 2,
        width: '35%',
        position: 'absolute',
        right: '0%',
        '@media (max-width: 900px)': {
            top: 0,
            width: '100%',
            height: '100%',
            fontSize: '20px'
        }
    },
    closeIcon: {
        width: 20,
        height: 20
    }
})

const opacityChange = {
    '0.5': {opacity: 0.5},
    '1': {opacity: 1}
}

const translateY = {
    'up': {transform: 'translateY(5px)'},
    'middle': {transform: 'translateY(0px)'}
}

const animationTitle = StyleSheet.create({
    animation: {
        animationName: [opacityChange, translateY],
        animationDuration: '3s, 1200ms',
        animationIterationCount: '1, 3'
    }
})

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false
}

export { Notifications }