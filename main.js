let Dilay = document.querySelector(".Dilay");
let Weekly = document.querySelector(".Weekly");
let Monthly = document.querySelector(".Monthly");

let workHours = document.querySelector(".workHours");
let workHoursPrevious = document.querySelector(".workHoursPrevious");

let playHours = document.querySelector(".playHours");
let playHoursPrevious = document.querySelector(".playHoursPrevious");

let studyHours = document.querySelector(".studyHours");
let studyHoursPrevious = document.querySelector(".studyHoursPrevious");

let exerciseHours = document.querySelector(".exerciseHours");
let socialHoursPrevious = document.querySelector(".exerciseHoursPrevious");

let socialHours = document.querySelector(".socialHours");
let exerciseHoursPrevious = document.querySelector(".exerciseHoursPrevious");

let scHours = document.querySelector(".scHours");
let scHoursPrevious = document.querySelector(".scHoursPrevious");

Dilay.addEventListener("click", function () {

  workHours.innerHTML = '5hrs'
  workHoursPrevious.innerHTML = 'Last Day - 7hrs'

  playHours.innerHTML = '1hrs'
  playHoursPrevious.innerHTML = 'Last Day - 2hrs'

  studyHours.innerHTML = "0hrs"
  studyHoursPrevious.innerHTML = 'Last Day - 1hrs'

  exerciseHours.innerHTML = "1hrs"
  socialHoursPrevious.innerHTML = 'Last Day - 1hrs'

  socialHours.innerHTML = "3hrs"
  exerciseHoursPrevious.innerHTML = 'Last Day - 3hrs'

  scHours.innerHTML = "0hrs"
  scHoursPrevious.innerHTML = "Last Day - 1hrs"
});


Weekly.addEventListener("click", function () {

  workHours.innerHTML = '23hrs'
  workHoursPrevious.innerHTML = 'Last Week - 36hrs'

  playHours.innerHTML = '10hrs'
  playHoursPrevious.innerHTML = 'Last Week - 8hrs'

  studyHours.innerHTML = "4hrs"
  studyHoursPrevious.innerHTML = 'Last Week - 7hrs'

  exerciseHours.innerHTML = "4hrs"
  exerciseHoursPrevious.innerHTML = 'Last Week - 5hrs'


  socialHours.innerHTML = "5hrs"
  socialHoursPrevious.innerHTML = 'Last Week - 10hrs'


  scHours.innerHTML = "2hrs"
  scHoursPrevious.innerHTML = "Last Week - 2hrs"
});



Monthly.addEventListener("click", function () {

  workHours.innerHTML = '103hrs'
  workHoursPrevious.innerHTML = 'Last Month - 128hrs'

  playHours.innerHTML = '23hrs'
  playHoursPrevious.innerHTML = 'Last Month - 29hrs'

  studyHours.innerHTML = "13hrs"
  studyHoursPrevious.innerHTML = 'Last Month - 19hrs'

  exerciseHours.innerHTML = "11hrs"
  exerciseHoursPrevious.innerHTML = 'Last Month - 18hrs'


  socialHours.innerHTML = "21hrs"
  socialHoursPrevious.innerHTML = 'Last Month - 23hrs'


  scHours.innerHTML = "7hrs"
  scHoursPrevious.innerHTML = "Last Month - 11hrs"
});


