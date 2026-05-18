const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const faqButtons = document.querySelectorAll(".faq-question");
const counters = document.querySelectorAll(".counter");

function closeMenu() {
  if (!menuToggle || !siteNav) return;

  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  siteNav.classList.remove("is-open");
}

function openMenu() {
  if (!menuToggle || !siteNav) return;

  menuToggle.classList.add("is-active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
  siteNav.classList.add("is-open");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 760) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const answer = item.nextElementSibling;
      if (answer) {
        answer.style.maxHeight = null;
      }
    });

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      const answer = button.nextElementSibling;
      if (answer) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    }
  });
});

function animateCounter(element) {
  const targetValue = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function frame(timestamp) {
    const progress = Math.min((timestamp - start) / duration, 1);
    const currentValue = targetValue * progress;

    if (Number.isInteger(targetValue)) {
      element.textContent = `${Math.floor(currentValue)}${suffix}`;
    } else {
      element.textContent = `${currentValue.toFixed(1)}${suffix}`;
    }

    if (progress < 1) {
      requestAnimationFrame(frame);
      return;
    }

    element.textContent = `${targetValue}${suffix}`;
  }

  requestAnimationFrame(frame);
}

if (counters.length) {
  const metricsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => metricsObserver.observe(counter));
}
