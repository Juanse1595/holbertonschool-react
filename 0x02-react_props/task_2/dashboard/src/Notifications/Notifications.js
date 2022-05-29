import React from "react";
import './Notifications.css';
import { NotificationItem } from "./NotificationItem";
import { getLatestNotification } from '../utils/utils';
import close_icon from './close-icon.png';

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={ getLatestNotification() } />
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
    );
}

export { Notifications }