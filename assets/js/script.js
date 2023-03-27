// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$("#currentDay").text(today.format("ddd, MMMM D YYYY, h:mm a"));

var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
  // gets the text info in he text area div
  var textEl = $(this).parent().children().eq(1).val();
  // debug here
  var keyEl = $(this).parent().id;
  console.log(keyEl);
  console.log(textEl);
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // displayTimeCss() - done below
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Done at the top of the page
  // TODO: Add code to display the current date in the header of the page.
});

// display military time
var currentHourMilitary = dayjs().format("H");
console.log(currentHourMilitary);

//  display past, present or future class to the time-block div classes
function displayTimeCss() {
  $(".time-block").each(function () {
    // console.log($(this), this.id);
    if (Number(this.id.split("-")[1]) < Number(currentHourMilitary)) {
      this.removeClass("future");
      this.removeClass("present");
      this.addClass("past");
    } else if (Number(this.id.split("-")[1]) === Number(currentHourMilitary)) {
      this.removeClass("future");
      this.removeClass("past");
      this.addClass("present");
    } else {
      this.removeClass("present");
      this.removeClass("past");
      this.addClass("future");
    }
  });
}

console.log($(".time-block")[0].id);

$(".time-block").each(function () {
  console.log(this, this.id);
});

// maybe make a clear button too...
