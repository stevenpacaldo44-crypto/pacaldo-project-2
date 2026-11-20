(function () {
  "use strict";

  // Mobile nav toggle
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }

  // Close mobile nav when clicking a nav link
  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.add("bi-list");
          mobileNavToggleBtn.classList.remove("bi-x");
        }
      }
    });
  });

  // Scroll-to-top button
  const scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (!scrollTop) return;
    if (window.scrollY > 150) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Initialize AOS (Animate On Scroll)
  window.addEventListener("load", () => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 650,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    }

    // Initialize PureCounter
    if (typeof PureCounter !== "undefined") {
      new PureCounter();
    }
  });

  // KCCI Admission Inquiry Form Handler
  const inquiryForm = document.getElementById("kcciInquiryForm");
  const formAlert = document.getElementById("formAlert");
  if (inquiryForm && formAlert) {
    inquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("applicantName").value.trim();
      const program = document.getElementById("programSelect").value;

      formAlert.textContent = `Thank you, ${name}! Your inquiry for ${program} has been recorded. The KCCI Admissions Office will contact you shortly.`;
      formAlert.classList.remove("d-none");
      inquiryForm.reset();
    });
  }
})();