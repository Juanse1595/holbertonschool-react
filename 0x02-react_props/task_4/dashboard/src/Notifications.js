import React from "react";
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function notification() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={getLatestNotification()}></li>
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