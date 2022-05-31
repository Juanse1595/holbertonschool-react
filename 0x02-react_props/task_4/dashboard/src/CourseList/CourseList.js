import React from "react";
import './CourseList.css';
import {CourseListRow} from './CourseListRow';

function CourseList() {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={true} />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={true} />
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={true} />
            </tbody>
        </table>
    )
}

export { CourseList };