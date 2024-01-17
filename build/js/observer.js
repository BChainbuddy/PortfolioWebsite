const resources = document.querySelectorAll(".resource");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      //   if (!item.target.classList.contains("end-resource")) {
      item.target.classList.toggle("end-resource", item.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

resources.forEach((item) => {
  observer.observe(item);
});
