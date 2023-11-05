const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

const btn2 = document.getElementById("view-button");
const nav2 = document.getElementById("work");
const nav3 = document.getElementById("work2");
const text = document.getElementById("view-more");
const text2 = document.getElementById("view-less");
const btn2div = document.getElementById("btn-div");
const recentlyAdded = document.getElementById("recentlyAdded");
const allProjects = document.getElementById("allProjects");
const filterMenu = document.getElementById("filterMenu");
const filterButton = document.getElementById("filterButton");
const filter = document.getElementById("filter");

btn2.addEventListener("click", () => {
  //SHOW ALL
  nav2.classList.toggle("lg:flex");
  nav2.classList.toggle("lg:hidden");
  nav3.classList.toggle("lg:flex");
  nav3.classList.toggle("lg:hidden");
  //RECENTLY ADDED AND ALL PROJECTS
  recentlyAdded.classList.toggle("hidden");
  recentlyAdded.classList.toggle("flex");
  allProjects.classList.toggle("flex");
  allProjects.classList.toggle("hidden");
  //WHOLEFILTER
  filter.classList.toggle("hidden");
  //VIEW MORE
  text.classList.toggle("flex");
  text.classList.toggle("hidden");
  //VIEW LESS
  text2.classList.toggle("flex");
  text2.classList.toggle("hidden");
  //CHANGE BUTTON CLASS
  if (btn2div.classList.contains("pb-10")) {
    btn2div.classList.remove("pb-10");
  } else {
    btn2div.classList.add("pb-10");
  }
});

//FILTER

const filterJavascript = document.getElementById("filterJavascript");
const filterPython = document.getElementById("filterPython");
const filterSolidity = document.getElementById("filterSolidity");
const filterNextjs = document.getElementById("filterNextjs");
const filterHardat = document.getElementById("filterHardhat");

const javascriptContent = document.getElementsByClassName("javascript");

filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("hidden");
  filterMenu.classList.toggle("flex");
  filterButton.classList.toggle("rounded-lg");
  filterButton.classList.toggle("rounded-t-lg");
  filterMenu.classList.toggle("rounded-lg");
  filterMenu.classList.toggle("rounded-b-lg");
});

filterJavascript.addEventListener("click", () => {
  for (let i = 0; i < javascriptContent.length; i++) {
    if (javascriptContent[i].classList.contains("border-8")) {
      javascriptContent[i].classList.toggle("bg-white");
    }
  }
});
