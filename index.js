function underlineAbout() {
  homepageLink.classList.remove("underline");
  underlineWorkLink.classList.remove("underline");
  underlineContactLink.classList.remove("underline");
  underlineAboutLink.classList.add("underline");
}

function underlineWork() {
  homepageLink.classList.remove("underline");
  underlineAboutLink.classList.remove("underline");
  underlineContactLink.classList.remove("underline");
  underlineWorkLink.classList.add("underline");
}

function underlineContact() {
  homepageLink.classList.remove("underline");
  underlineAboutLink.classList.remove("underline");
  underlineWorkLink.classList.remove("underline");
  underlineContactLink.classList.add("underline");
}

let homepageLink = document.querySelector("#homepageLink");
let underlineAboutLink = document.querySelector("#aboutLink");
let underlineWorkLink = document.querySelector("#workLink");
let underlineContactLink = document.querySelector("#contactLink");
let contactButton = document.querySelector("#contact-button");
let projectButton = document.querySelector("#project-button");

underlineAboutLink.addEventListener("click", underlineAbout);
underlineWorkLink.addEventListener("click", underlineWork);
underlineContactLink.addEventListener("click", underlineContact);
contactButton.addEventListener("click", underlineContact);
projectButton.addEventListener("click", underlineWork);
