const header = document.getElementById("header");
let bounds = header.getBoundingClientRect().top;

document.addEventListener("scroll", () => {
  // console.log(bounds);
  if (window.scrollY > bounds + 8) {
    //flex flex-row justify-between sm:items-center sm:pb-4 pt-4 lg:pb-0 border-bottom-LightBlue md:border-b-0 sm:bg-teal-950 md:bg-transparent
    //Change p, change bg
    header.classList.remove("lg:pb-0");
    header.classList.add("py-8");
    header.classList.remove("md:bg-transparent");
    header.classList.add("sticky", "top-0");
    header.classList.remove("md:border-b-0");
  } else {
    if (header.classList.contains("sticky")) {
      header.classList.remove("py-8");
      header.classList.add("lg:pb-0");
      header.classList.add("md:bg-transparent");
      header.classList.add("md:border-b-0");
      header.classList.remove("sticky", "top-0");
    }
  }
});
