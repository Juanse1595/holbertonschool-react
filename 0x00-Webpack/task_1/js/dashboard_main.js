import $ from "jquery";
const _ = require('lodash');

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

function updateCounter() {
  let count = 0;
  $("button").on('click', _.debounce(() => {
    count++;
    $("#count").append(`${count} clicks on the button`)
  }), 1);
}

updateCounter;