function getFullYear() {
    let year = new Date();
    return year.getFullYear();
}



function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School'
    } else {
        return 'Holberton School main dashboard'
    }
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}