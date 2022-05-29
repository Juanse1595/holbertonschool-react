import React from "react";

function NotificationItem(props) {
    return(
        <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>
    )
}

export { NotificationItem };