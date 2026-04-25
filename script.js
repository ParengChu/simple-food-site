const tabs = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".menu-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active class
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");

    items.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});