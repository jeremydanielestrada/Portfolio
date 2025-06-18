// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });

  // Add active class to nav links based on scroll position
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-blue-500");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-blue-500");
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // You can add form validation and submission logic here
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }
});
