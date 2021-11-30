function underlineAboutLink() {
  homepageLink.ClassList.remove("underline");
  aboutLink.classList.add("underline");
}

let aboutLink = document.querySelector("#aboutLink");
aboutLink.addEventListener("click", underlineAboutLink);
