import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';
import { useState } from "react";

const color_1 = {backgroundColor: '#f5f5f5ab'};
const color_2 = {backgroundColor: '#deb5b545'};
const rowChecked = {backgroundColor: '#e6e4e4'};

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    const [isChecked, setIsChecked] = useState(false);
    let style = isHeader ? color_2 : color_1;
    if (isChecked) style = rowChecked;
    return (
        <tr style={style}>
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
                <td><input type="checkbox" onClick={() => setIsChecked(!isChecked)} />{textFirstCell}</td>
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
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export { CourseListRow }