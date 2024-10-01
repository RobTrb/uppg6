const text = document.querySelector("#inpField");
const submitBtn = document.querySelector("#inpBtn");

const { changeTextToCaps } = require("./function.js");

submitBtn.addEventListener("click", () => changeTextToCaps(text.value));
