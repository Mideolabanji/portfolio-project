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

underlineAboutLink.addEventListener("click", underlineAbout);
underlineWorkLink.addEventListener("click", underlineWork);
underlineContactLink.addEventListener("click", underlineContact);
