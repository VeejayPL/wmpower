const button = document.querySelector("button");
const navMobile = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
const itemList = document.querySelectorAll(".animation");
const navList = document.querySelectorAll(".nav-item");

const options = { threshold: 0.2 };

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const myObserver = new IntersectionObserver(callback, options);

itemList.forEach((item) => {
  myObserver.observe(item);
});

button.addEventListener("click", () => {
  const currentState = button.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
    navMobile.classList.add("active");
    header.classList.add("active");
  } else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    navMobile.classList.remove("active");
    header.classList.remove("active");
  }
});

navList.forEach((item) => {
  item.addEventListener("click", () => {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    navMobile.classList.remove("active");
    header.classList.remove("active");
  });
});
