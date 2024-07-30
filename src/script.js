const slideList = document.querySelectorAll(".slide");
const btnPrevious = document.querySelector(".arrow-previous");
const btnNext = document.querySelector(".arrow-next");

let imageCurrent = 0;

btnNext.addEventListener("click", () => {
  if (imageCurrent === slideList.length - 1) {
    return;
  }

  imageCurrent++;

  hideOpenImage();
  slideList[imageCurrent].classList.add("show");
  showOrHideArrows();
});

btnPrevious.addEventListener("click", () => {
  if (imageCurrent === slideList.length - 4) {
    return;
  }

  imageCurrent--;

  hideOpenImage();
  slideList[imageCurrent].classList.add("show");
  showOrHideArrows();
});

function hideOpenImage() {
  const imageOpen = document.querySelector(".show");
  imageOpen.classList.remove("show");
}

function showOrHideArrows() {
  const noIsFirstImage = imageCurrent !== 0;
  if (noIsFirstImage) {
    btnPrevious.classList.remove("Low-opacity");
  } else {
    btnPrevious.classList.add("Low-opacity");
  }

  const arrivedAtLastImage =
    imageCurrent !== 0 && imageCurrent === slideList.length - 1;

  if (arrivedAtLastImage) {
    btnNext.classList.add("Low-opacity");
  } else {
    btnNext.classList.remove("Low-opacity");
  }
}
