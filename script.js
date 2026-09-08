/* ===================================================================
   Alessandro Guenna — Portfolio
   JavaScript minimo: menu mobile, anno corrente, chiusura menu al click.
   =================================================================== */

// Anno corrente nel footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile (hamburger)
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Chiudi il menu dopo aver cliccato una voce (su mobile)
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
