import React from "react";
import './Notifications.css';
import close_icon from './close_icon.png'

export default function notification() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
            <button style={{float: 'right'}} 
            aria-label='Close'
            onClick={() => {
                console.log('Close button has been clicked')
            }}>
                <img src={close_icon}></img>
            </button>
        </div>
    );
}