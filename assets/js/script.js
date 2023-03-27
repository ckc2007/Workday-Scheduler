// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $(".saveBtn");
var clearBtn = $("#clearBtn");

$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm a"));

  // display military time
  var currentHourMilitary = dayjs().format("H");
  // console.log(currentHourMilitary);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on("click", function () {
    // gets the text info in he text area div
    var textEl = $(this).parent().children().eq(1).val();
    // debug here
    var keyEl = $(this).parent()[0].id;
    // console.log(keyEl);
    // console.log(textEl);
    localStorage.setItem(keyEl, textEl);
    // retrieve the data stored at the key - which is the id
    // var entry9 = localStorage.getItem("hour-9");
    // console.log(entry9)
  });
  //
  // displayTimeCss() - done below
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //  display past, present or future class to the time-block div classes
  function displayTimeCss() {
    $(".time-block").each(function () {
      // console.log($(this), +$(this)[0].id.split("-")[1], +currentHourMilitary);
      if (+$(this)[0].id.split("-")[1] < +currentHourMilitary) {
        // console.log($(this)[0].id.split("-")[1]);
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        // console.log($(this), this.id);
      } else if (+$(this)[0].id.split("-")[1] === +currentHourMilitary) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
        // console.log($(this), this.id);
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        // console.log($(this), this.id);
      }
    });
  }

  displayTimeCss();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // render the saved info
  function renderSavedInfo() {
    $(".time-block").each(function () {
      $(this)
        .children()
        .eq(1)
        // debug here - FIXED - i need to pass the key which is the id - add [0] every time!
        .text(localStorage.getItem($(this)[0].id));
    });
  }

  renderSavedInfo();

  // maybe make a clear button too...
clearBtn.on("click", function () {
  localStorage.clear();
  location.reload();
});
});

// console.log($(".time-block")[0].id);

// $(".time-block").each(function () {
//   console.log(this, this.id);
// });


