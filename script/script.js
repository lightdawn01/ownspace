import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
 const todayDate = dayjs().format('dddd, MMMM D, YYYY');
document.getElementById('today-date').textContent = todayDate;

const todayTime = dayjs().format('HH:mm');
document.getElementById('today-time').textContent = todayTime;

