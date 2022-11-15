setInterval(setClock, 1000);

const hrHand = document.querySelector("[data-hr-hand]");
const minHand = document.querySelector("[data-min-hand]");
const sHand = document.querySelector("[data-s-hand]");

function setClock() {
  const currDate = new Date();
  const sRatio = currDate.getSeconds() / 60;
  // console.log(sRatio)
  const minRatio = (sRatio + currDate.getMinutes()) / 60;
  console.log(minRatio);
  const hrRatio = (minRatio + currDate.getHours()) / 12;

  setRotation(sHand, sRatio)
  setRotation(minHand, minRatio)
  setRotation(hrHand, hrRatio)
}

function setRotation(elem, rotationRatio) {
    elem.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
