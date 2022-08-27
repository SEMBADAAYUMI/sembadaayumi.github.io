function showTime() {
let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let period = "AM"
  if (hours >= 12) {
    period = "PM"
  }
  if(hours > 12) {
    hours = hours - 12;
    //hours = 13 - 12 = 1
  }
  // dispalying time
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  let time = hours + " : " + minutes + " : " + second + " " + period;
  document.getElementsByTagName("h1")[0].innerText = time;// change the h1

  //this will refresh the time every one second without reloading
  
}
setInterval(showTime, 1000);





const audio = new Audio("./files/belKlakson.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    let current = new Date();
    let timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeOut = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeOut);
      alert("alarm set");
          }
  }
}

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("alarm cleared");
  }
}
const form = document.querySelector("#new-alarm-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList. add("list-group-item");
    list.appendChild(li);
    input.value = "";

    li.addEventListener("click", () => {
      li.remove();
  })
})



// function updateTime() {
//   const date = new Date();
//   const hour = formatTime(date.getHours());
//   const minutes = formatTime(date.getMinutes());
//   const seconds = formatTime(date.getSeconds());
//   display.innerText = `${hour} : ${minutes} : ${seconds}`;
// }
// function formatTime(time) {
//   if (time < 10) {
//     return "0" + time;
//   }
//   return time;
// }
// setInterval(updateTime, 1000);


// function clearAlarm() {
//   audio.pause();
//   if (alarmTimeout) {
//     clearTimeout(alarmTimeout);
//     alert("alarm cleared");
//   }
// }