let filterA = document.querySelector("#blur");
let filterB = document.querySelector("#contrast");
let filterC = document.querySelector("#hue-rotate");
let filterD = document.querySelector("#sepia");

let noFlipBtn = document.querySelector("#no-flip");
let flipXBtn = document.querySelector("#flip-x");
let flipYBtn = document.querySelector("#flip-y");

let uploadButton = document.querySelector("#upload-button");
let image = document.querySelector("#chosen-image");

uploadButton.onchange = () => {
  document.querySelector(".image-container").style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach((slider) => {
  slider.addEventListener("input", addFilter);
});

function addFilter() {
  image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
}
