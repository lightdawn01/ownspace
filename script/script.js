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


const button  = document.querySelector("js-color-wheel");

      function random(number) {
        return Math.floor(Math.random() * (number +1));
      }

      button.addEventListener("click", () => {
       const randomColorBody = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = randomColorBody;
  
      });
