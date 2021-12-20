function addTask(description, dueTime) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    let span = document.createElement('span');
    span.classList = "due"
    let time = document.querySelector('#duetime_input').value;
    let date = document.querySelector('#duedate_input').value;
    let endtime = date.split('-').join(',') + ',' + time.split(':').join(',');
    let endarray = endtime.split(',')
    span.innerText = new Date(endarray[0], endarray[1], endarray[2], endarray[3], endarray[4]).toLocaleString();
    button.classList = "btn btn-outline-danger"
    button.addEventListener('click', function () {
        done(this)
    })
    button.innerText = "Done";
    li.innerText = description;
    if (dueTime != false) {
        li.append(span)
    }
    li.append(button)
    console.log(li)
    // document.querySelector('#task_list').insertAdjacentHTML("afterBegin", li)
    document.querySelector('#task_list').append(li)
}


/* Part3 */
function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber;
    // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber;
    // Returns the number of milliseconds from midnight to the time
    if (dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}
/* Part4 */
document.querySelector('#task_description_input').addEventListener('keydown', function (e) {
    var desc = document.querySelector('#task_description_input').value;
    var date = document.querySelector('#duedate_input');
    var time = document.querySelector('#duetime_input');
    console.log(e.which)
    if (e.which == 13) {
        addTask(desc, dateAndTimeToTimestamp(date, time))
        /* Part 5: Clearing the task description input element */
        document.querySelector('#task_description_input').value = '';
    }
})
/* part6 */
function done(e) {
    e.parentNode.remove()
}
/* add task */
function addtask() {
    var desc = document.querySelector('#task_description_input').value;
    var date = document.querySelector('#duedate_input');
    var time = document.querySelector('#duetime_input');
    addTask(desc, dateAndTimeToTimestamp(date, time))
    /* Part 5: Clearing the task description input element */
    document.querySelector('#task_description_input').value = '';
}
