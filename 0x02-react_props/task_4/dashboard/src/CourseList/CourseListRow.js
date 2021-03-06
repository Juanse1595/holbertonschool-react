import React from "react";
import PropTypes from "prop-types";

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    return (
        <tr>
            {isHeader && textSecondCell ?
            <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </>
            :
            <th colSpan={2}>{textFirstCell}</th>
        }
        {!isHeader &&
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        }
        </tr>
    )
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
}

export { CourseListRow }