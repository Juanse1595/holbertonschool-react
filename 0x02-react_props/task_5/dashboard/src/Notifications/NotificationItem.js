import React from "react";
import PropTypes from "prop-types";

function NotificationItem(props) {
    return(
        <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>
    )
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string
}

NotificationItem.defaultProps = {
    type: 'default'
}

export { NotificationItem };