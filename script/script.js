import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

function updateDateTime() {

const now = dayjs();

const todayDate = now.format('dddd, MMMM D, YYYY');
document.getElementById('today-date').textContent = todayDate;

const todayTime = now.format('HH:mm');
document.getElementById('today-time').textContent = todayTime;
}

setIntetrval(updateDateTime, 1000);

updateDateTime();
