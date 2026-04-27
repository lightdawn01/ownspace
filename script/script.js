/* Day and Time Update */

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

function updateDateTime() {

const now = dayjs();

const todayDate = now.format('dddd, MMMM D, YYYY');
document.getElementById('today-date').textContent = todayDate;

const todayTime = now.format('HH:mm');
document.getElementById('today-time').textContent = todayTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();

/* Color Wheel Body Change */
const button  = document.querySelector(".js-color-wheel");

      function random(min, max) {
        return Math.floor(Math.random() * (max - min  +1) + min);
      }

      button.addEventListener("click", () => {
       const [r, g, b] = [random(200, 255), random(200, 255), random(200, 255)]
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
      });
function openWindow() {
      document.getElementById("









