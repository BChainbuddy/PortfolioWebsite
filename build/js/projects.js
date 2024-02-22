//Recently Added
const elements = document.querySelectorAll(".recentlyAdded");

if (elements) {
  setTimeout(() => {
    elements.forEach((item) => {
      item.classList.toggle("recentlyAdded-end");
    });
  }, 500);
}

// View more/less
const viewButton = document.getElementById("btn-div");

if (viewButton) {
  setTimeout(() => {
    viewButton.classList.toggle("view-end");
  });
}

// Projects observer
const projectsForObserving = document.querySelectorAll(".project");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      if (!item.target.classList.contains("project-end")) {
        item.target.classList.toggle("project-end", item.isIntersecting);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

if (projectsForObserving) {
  projectsForObserving.forEach((item) => projectObserver.observe(item));
}

const reset = document.getElementById("view-less");
const opened = document.getElementById("view-more");

reset.addEventListener("click", () => {
  projectsForObserving.forEach((item) => item.classList.remove("project-end"));
  elements.forEach((item) => item.classList.remove("recentlyAdded-end"));
  if (elements) {
    setTimeout(() => {
      elements.forEach((item) => {
        item.classList.toggle("recentlyAdded-end");
      });
    }, 500);
  }
});

const recentlyAddedTitle = document.getElementById("recentlyAdded");
const allProjectsTitle = document.getElementById("allProjects");

opened.addEventListener("click", () => {
  recentlyAddedTitle.classList.toggle("titleRecentlyAdded-end");
});

const smprojects = document.querySelectorAll(".smproject");

const smprojectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      if (!item.target.classList.contains("end-resource")) {
        item.target.classList.toggle("end-resource", item.isIntersecting);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

smprojects.forEach((item) => {
  smprojectObserver.observe(item);
});
