const time = document.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const currnetDate = new Date();
  const leftTime = xmasDay - currnetDate;
  const leftDays = Math.floor(leftTime / (24 * 60 * 60 * 1000));
  const leftTimes = leftTime % (24 * 60 * 60 * 1000);
  const hour = Math.floor(
    (leftTimes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((leftTimes % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((leftTimes % (1000 * 60)) / 1000);

  time.innerText = `${leftDays}d ${hour < 10 ? `0${hour}` : hour}h ${
    minute < 10 ? `0${minute}` : minute
  }m ${second < 10 ? `0${second}` : second}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
