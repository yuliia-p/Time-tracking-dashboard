document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/js/data.json');
  const data = await response.json();
  // console.log('data', data);

  const actName = document.querySelectorAll('.activity-name');
  // const currentHoursEl = document.querySelectorAll('.currentHours');
  // const previousHourstHoursEl = document.querySelectorAll('.previousHours');
  // console.log('currentHoursEl', currentHoursEl);
  // console.log('previousHourstHoursEl', previousHourstHoursEl);
  // console.log('actName', actName);

  function displayTitle() {
    // console.log('data', data);

    for (let i = 0; i < data.length; i++) {
      actName[i].innerHTML = `${data[i].title}`;
      // console.log(actName[i]);
    }
  }
  displayTitle();

  document.querySelectorAll('.stats-a').forEach(element => {
    element.addEventListener('click', () => {
      // console.log('hello');
    });
  });

});
