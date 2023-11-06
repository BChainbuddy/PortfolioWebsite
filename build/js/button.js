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
const projectGrid = document.getElementById("grid");
const recentlyAddedProjects = document.getElementById("recentlyAddedProjects");

btn2.addEventListener("click", () => {
  // RECENTLY ADDED PROJECTS
  recentlyAddedProjects.classList.toggle("hidden");
  recentlyAddedProjects.classList.toggle("flex");
  //SHOW ALL
  // nav2.classList.toggle("lg:flex");
  // nav2.classList.toggle("lg:hidden");
  // nav3.classList.toggle("lg:flex");
  // nav3.classList.toggle("lg:hidden");
  projectGrid.classList.toggle("lg:grid");
  projectGrid.classList.toggle("lg:hidden");

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
const filterSolidity = document.getElementById("filterSoldity");
const filterNextjs = document.getElementById("filterNextjs");
const filterHardat = document.getElementById("filterHardhat");

const javascriptContent = document.getElementsByClassName("javascript");
const pythonContent = document.getElementsByClassName("python");
const solidityContent = document.getElementsByClassName("solidity");
const nextjsContent = document.getElementsByClassName("nextjs");
const hardhatContent = document.getElementsByClassName("hardhat");
const projects = document.getElementsByClassName("project");
const filterIcons = document.getElementsByClassName("filterIcon");

filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("hidden");
  filterMenu.classList.toggle("flex");
  filterButton.classList.toggle("rounded-lg");
  filterButton.classList.toggle("rounded-t-lg");
  filterMenu.classList.toggle("rounded-lg");
  filterMenu.classList.toggle("rounded-b-lg");
});

filterJavascript.addEventListener("click", () => {
  //TO CHOOSE FILTER
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("javascript")) {
      filterIcons[i].classList.toggle("bg-white");
    } else {
      if (filterIcons[i].classList.contains("bg-white")) {
        filterIcons[i].classList.remove("bg-white");
      }
    }
  }
  //TO SHOW THE PROJECTS
  for (let i = 0; projects.length; i++) {
    if (
      !projects[i].classList.contains("javascript") &&
      !projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.add("hidden");
    } else if (
      projects[i].classList.contains("javascript") &&
      projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.remove("hidden");
      projects[i].classList.toggle("hidden");
    }
  }
});

filterPython.addEventListener("click", () => {
  //TO CHOOSE FILTER
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("python")) {
      filterIcons[i].classList.toggle("bg-white");
    } else {
      if (filterIcons[i].classList.contains("bg-white")) {
        filterIcons[i].classList.remove("bg-white");
      }
    }
  }
  //TO SHOW THE PROJECTS
  for (let i = 0; projects.length; i++) {
    if (
      !projects[i].classList.contains("python") &&
      !projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.add("hidden");
    } else if (
      projects[i].classList.contains("python") &&
      projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.remove("hidden");
      projects[i].classList.toggle("hidden");
    }
  }
});

filterSolidity.addEventListener("click", () => {
  //TO CHOOSE FILTER
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("solidity")) {
      filterIcons[i].classList.toggle("bg-white");
    } else {
      if (filterIcons[i].classList.contains("bg-white")) {
        filterIcons[i].classList.remove("bg-white");
      }
    }
  }
  //TO SHOW THE PROJECTS
  for (let i = 0; projects.length; i++) {
    if (
      !projects[i].classList.contains("solidity") &&
      !projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.add("hidden");
    } else if (
      projects[i].classList.contains("solidity") &&
      projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.remove("hidden");
      projects[i].classList.toggle("hidden");
    }
  }
});

filterNextjs.addEventListener("click", () => {
  //TO CHOOSE FILTER
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("nextjs")) {
      filterIcons[i].classList.toggle("bg-white");
    } else {
      if (filterIcons[i].classList.contains("bg-white")) {
        filterIcons[i].classList.remove("bg-white");
      }
    }
  }
  //TO SHOW THE PROJECTS
  for (let i = 0; projects.length; i++) {
    if (
      !projects[i].classList.contains("nextjs") &&
      !projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.add("hidden");
    } else if (
      projects[i].classList.contains("nextjs") &&
      projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.remove("hidden");
      projects[i].classList.toggle("hidden");
    }
  }
});

filterHardat.addEventListener("click", () => {
  //TO CHOOSE FILTER
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("hardhat")) {
      filterIcons[i].classList.toggle("bg-white");
    } else {
      if (filterIcons[i].classList.contains("bg-white")) {
        filterIcons[i].classList.remove("bg-white");
      }
    }
  }
  //TO SHOW THE PROJECTS
  for (let i = 0; projects.length; i++) {
    if (
      !projects[i].classList.contains("hardhat") &&
      !projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.add("hidden");
    } else if (
      projects[i].classList.contains("hardhat") &&
      projects[i].classList.contains("hidden")
    ) {
      projects[i].classList.remove("hidden");
      projects[i].classList.toggle("hidden");
    }
  }
});
