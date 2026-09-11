/* ===================================================================
   Alessandro Guenna — Portfolio
   JavaScript minimo: menu mobile, anno corrente, back-to-top.
   =================================================================== */

// Anno corrente nel footer
document.getElementById("year").textContent = new Date().getFullYear();

// Back-to-top / logo: scroll affidabile in cima.
// (Un semplice href="#top" non funziona perché #top è l'header sticky,
//  sempre in vista: il browser lo considera già visibile e non scrolla.)
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

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
