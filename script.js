const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const getSavedTheme = () => {
  try {
    return localStorage.getItem("matrix-osl-theme");
  } catch (error) {
    console.warn("The saved theme preference could not be read.", error);
    return null;
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem("matrix-osl-theme", theme);
  } catch (error) {
    console.warn("The theme preference could not be saved.", error);
  }
};

const setTheme = (theme) => {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeToggle.title = `Switch to ${isDark ? "light" : "dark"} theme`;
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#101a24" : "#f5f6f4";
};

setTheme(getSavedTheme() === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  saveTheme(nextTheme);
});

const closeMenu = () => {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navLinks = [...document.querySelectorAll('.navigation .nav-link[href^="#"]')];
const pageSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
          link.classList.toggle("is-active", isCurrent);
        });
      }
    });
  }, { rootMargin: "-25% 0px -65% 0px" });

  pageSections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

let scrollFrameRequested = false;

window.addEventListener("scroll", () => {
  if (scrollFrameRequested) return;
  scrollFrameRequested = true;

  window.requestAnimationFrame(() => {
    const hasScrolled = window.scrollY > 24;
    siteHeader.classList.toggle("is-scrolled", hasScrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
    scrollFrameRequested = false;
  });
}, { passive: true });

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const firstName = String(formData.get("name")).trim().split(/\s+/)[0];
    formStatus.textContent = `Thank you, ${firstName}. Your enquiry is ready. This demo does not transmit messages, so please contact us directly at info@Matrixosl.example or +234 800 000 0000.`;
    formStatus.classList.add("is-visible");
  });

  form.addEventListener("input", () => {
    formStatus.classList.remove("is-visible");
    formStatus.textContent = "";
  });
}

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
