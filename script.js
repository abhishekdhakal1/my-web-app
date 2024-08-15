function renderPage(pathname) {
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  const sectionId = pathname.substring(1) || "home";
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPage(window.location.pathname);

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = e.target.getAttribute("href");
      window.history.pushState({}, "", path);
      renderPage(path);
    });
  });
});

window.addEventListener("popstate", () => {
  renderPage(window.location.pathname);
});
