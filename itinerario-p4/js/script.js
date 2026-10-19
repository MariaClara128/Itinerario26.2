```javascript
// Seleciona os elementos do menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Abre e fecha o menu em telas menores
menuToggle.addEventListener("click", () => {
    const menuAberto = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = menuAberto ? "✕" : "☰";
});

// Fecha o menu depois de clicar em um link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuToggle.textContent = "☰";
    });
});
```

