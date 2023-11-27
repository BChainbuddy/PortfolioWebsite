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

btn2.addEventListener("click", () => {
  // RECENTLY ADDED PROJECTS
  // recentlyAddedProjects.classList.toggle("hidden");
  recentlyAddedProjects.classList.toggle("lg:grid");
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
  // if (btn2div.classList.contains("pb-10")) {
  //   btn2div.classList.remove("pb-10");
  // } else {
  //   btn2div.classList.add("pb-10");
  // }
  //RESET THE FILTER
  for (let i = 0; i < filterIcons.length; i++) {
    if (filterIcons[i].classList.contains("bg-white")) {
      filterIcons[i].classList.remove("bg-white");
    }
  }
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("hidden")) {
      projects[i].classList.remove("hidden");
    }
  }
  if (filterMenu.classList.contains("flex")) {
    filterMenu.classList.toggle("hidden");
    filterMenu.classList.toggle("flex");
    filterButton.classList.toggle("rounded-lg");
    filterButton.classList.toggle("rounded-t-lg");
    filterMenu.classList.toggle("rounded-lg");
    filterMenu.classList.toggle("rounded-b-lg");
    s;
  }
});

//FILTER
filterButton.addEventListener("click", () => {
  filterMenu.classList.toggle("hidden");
  filterMenu.classList.toggle("flex");
  filterButton.classList.toggle("rounded-lg");
  filterButton.classList.toggle("rounded-t-lg");
  filterMenu.classList.toggle("rounded-lg");
  filterMenu.classList.toggle("rounded-b-lg");
});

// ce kliknemo gor in noben nima bgja, potem dodamo bg in hiddamo vse ostale
// ce kliknemo gor in ima neka druga bg, potem tam odstranimo bg, pri nasi dodamo, hiddamo vse elemente ki niso hiddani in odhiddamo vse elemente filtra
// ce kliknemo gor in ima nasa bg, odstranimo bg in odhidamo vse ki so hiddani

filterJavascript.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting javascript projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("javascript")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("javascript")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("javascript")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("javascript")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (projects[c].classList.contains("hidden")) {
              projects[c].classList.remove("hidden");
            }
          }
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("javascript")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
});

filterPython.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting python projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("python")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("python")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("python")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("python")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (projects[c].classList.contains("hidden")) {
              projects[c].classList.remove("hidden");
            }
          }
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("python")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
});

filterSolidity.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting solidity projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("solidity")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("solidity")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let c = 0; c < filterIcons.length; c++) {
        if (filterIcons[i].classList.contains("solidity")) {
          filterIcons[i].classList.add("bg-white");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("solidity")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("solidity")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (projects[c].classList.contains("hidden")) {
              projects[c].classList.remove("hidden");
            }
          }
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("solidity")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
});

filterNextjs.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting nextjs projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("nextjs")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("nextjs")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let c = 0; c < filterIcons.length; c++) {
        if (filterIcons[i].classList.contains("nextjs")) {
          filterIcons[i].classList.add("bg-white");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("nextjs")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("nextjs")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (projects[c].classList.contains("hidden")) {
              projects[c].classList.remove("hidden");
            }
          }
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("nextjs")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
});

filterHardat.addEventListener("click", () => {
  let a = false; // false - no other filter is on, true - other filter is on
  console.log("getting hardhat projects");
  for (let i = 0; i < filterIcons.length; i++) {
    if (
      filterIcons[i].classList.contains("bg-white") &&
      !filterIcons[i].classList.contains("hardhat")
    ) {
      filterIcons[i].classList.remove("bg-white");
      a = true;
      console.log("a is true");
      for (let c = 0; c < projects.length; c++) {
        if (!projects[c].classList.contains("hidden")) {
          projects[c].classList.add("hidden");
        }
      }
      for (let c = 0; c < projects.length; c++) {
        if (projects[c].classList.contains("hardhat")) {
          projects[c].classList.remove("hidden");
        }
      }
      for (let d = 0; d < filterIcons.length; d++) {
        if (filterIcons[d].classList.contains("hardhat")) {
          filterIcons[d].classList.add("bg-white");
        }
      }
    }
  }
  if (a == false) {
    console.log("a is false");
    for (let i = 0; i < filterIcons.length; i++) {
      if (filterIcons[i].classList.contains("hardhat")) {
        console.log("found the button");
        if (filterIcons[i].classList.contains("bg-white")) {
          console.log("Button was on");
          filterIcons[i].classList.remove("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (projects[c].classList.contains("hidden")) {
              projects[c].classList.remove("hidden");
            }
          }
        } else {
          console.log("Button was off");
          filterIcons[i].classList.add("bg-white");
          for (let c = 0; c < projects.length; c++) {
            if (!projects[c].classList.contains("hardhat")) {
              projects[c].classList.add("hidden");
            }
          }
        }
      }
    }
  }
});
