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

btn2.addEventListener("click", () => {
  //SHOW ALL
  nav2.classList.toggle("lg:flex");
  nav2.classList.toggle("lg:hidden");
  nav3.classList.toggle("lg:flex");
  nav3.classList.toggle("lg:hidden");
  //VIEW MORE
  text.classList.toggle("hidden");
  text.classList.toggle("flex");
  //VIEW LESS
  text2.classList.toggle("flex");
  text2.classList.toggle("hidden");
  //CHANGE BUTTON CLASS
  if (btn2div.classList.contains("pb-6")) {
    btn2div.classList.remove("pb-6");
  } else {
    btn2div.classList.add("pb-6");
  }
});
