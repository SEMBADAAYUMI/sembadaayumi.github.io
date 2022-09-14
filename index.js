const display = document.querySelector("#clock");
const audio = new Audio("./files/febriVoice.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;


function updateTime() {
  const date = new Date();
  const hour = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
 
  display.innerText = `${hour} : ${minutes} : ${seconds}`;

}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}
setInterval(updateTime, 1000);

function setAlarmTime(value) {
  alarmTime = value;
  console.log(alarmTime);
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    console.log(current);
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeOut = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeOut);
      alarmTimeout = setTimeout(() => audio.play(), timeOut);
      alert("Waktu TAT Di Mulai");
    }
  }
}

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Mohon Approve BTA!!");
  }
  else(alarmTime);
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
  if (alarmTimeout) {
    alert("Mohon Approve BTA!!");
  }})
})