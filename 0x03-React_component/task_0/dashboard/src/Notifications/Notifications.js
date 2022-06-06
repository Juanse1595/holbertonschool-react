import React from "react";
import './Notifications.css';
import { NotificationItem } from "./NotificationItem";
import { getLatestNotification } from '../utils/utils';
import close_icon from './close-icon.png';
import PropTypes, { arrayOf } from "prop-types";
import { NotificationItemShape } from './NotificationItemShape'

function Notifications({displayDrawer, listNotifications}) {
    return (
        <>
            <div className="menuItem">Your notifications</div>
            { displayDrawer &&
                <div className="Notifications">
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications === [] && <NotificationItem type="default" value="No new notification for now"/>}
                        {listNotifications.map((notification) => <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}/>)}
                    </ul>
                    <button style={{position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'none',
                    border: 'none'}}
                    aria-label='Close'
                    onClick={() => {
                        console.log('Close button has been clicked')
                    }}>
                        <img src={close_icon} alt='close-icon'></img>
                    </button>
                </div>
            }
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false
}

export { Notifications }