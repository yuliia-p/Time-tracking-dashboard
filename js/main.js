document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/js/data.json');
  const data = await response.json();
  const actName = document.querySelectorAll('.activity-name');
  const currentHoursEl = document.querySelectorAll('.currentHours');
  const previousHourstHoursEl = document.querySelectorAll('.previousHours');

  function displayTitle() {

    for (let i = 0; i < data.length; i++) {
      actName[i].innerHTML = `${data[i].title}`;
    }
  }
  displayTitle();
  displayDayHours();

  document.querySelectorAll('.stats-a').forEach(element => {
    element.addEventListener('click', () => {
      const activeEl = document.querySelectorAll('.active');
      for (const activeElement of activeEl) {
        activeElement.classList.remove('active');
      }
      if (element.classList.contains('day')) {
        element.classList.add('active');
        displayDayHours();
      }
      if (element.classList.contains('week')) {
        element.classList.add('active');
        displayWeekHours();
      }
      if (element.classList.contains('month')) {
        element.classList.add('active');
        displayMonthHours();
      }
    });
  });
  function displayDayHours() {
    for (let i = 0; i < data.length; i++) {
      const { daily } = data[i].timeframes;
      currentHoursEl[i].innerHTML = `${daily.current}hr`;
      previousHourstHoursEl[i].innerHTML = `Yesterday - ${daily.previous}hr`;
    }
  }

  function displayWeekHours() {
    for (let i = 0; i < data.length; i++) {
      const { weekly } = data[i].timeframes;
      currentHoursEl[i].innerHTML = `${weekly.current}hr`;
      previousHourstHoursEl[i].innerHTML = `Last Week - ${weekly.previous}hr`;
    }
  }
  displayWeekHours();

  function displayMonthHours() {
    for (let i = 0; i < data.length; i++) {
      const { monthly } = data[i].timeframes;
      currentHoursEl[i].innerHTML = `${monthly.current}hr`;
      previousHourstHoursEl[i].innerHTML = `Last Month - ${monthly.previous}hr`;
    }
  }
  displayMonthHours();
});
