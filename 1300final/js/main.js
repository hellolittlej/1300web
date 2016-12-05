/* A function to append date to footer*/
window.onload = function date_month_year() {
    "use strict";
    // Months variables
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        
        // Using default method to get pieces of date
        date = new Date(),

        // Create date, month and year variables
        cur_date = date.getDate(),
        cur_month = monthArray[date.getMonth()],
        cur_year = date.getFullYear(),

        // Insertion into DOM tree
        n_span = document.createElement('span'),
        date_text = document.createTextNode(cur_month + ' ' + cur_date + ', ' + cur_year),
        position = document.getElementById('footer');
    
    // Append date to footer
    n_span.appendChild(date_text);
    position.appendChild(n_span);
};