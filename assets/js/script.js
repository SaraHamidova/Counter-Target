
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const afterTimeCounter = () => {
    const stopNum = +counter.getAttribute('data-target');
    const startNum = +counter.innerText;
    const increment = stopNum / 200;

    if (startNum < stopNum) {
      counter.innerText = `${Math.ceil(startNum + increment)}`;
      setTimeout(afterTimeCounter, 1);
    } else {
      counter.innerText = stopNum;
    }
  };
  afterTimeCounter();
});
