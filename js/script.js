const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const contraInput = document.getElementById("contraseña");
const repeatInput = document.getElementById("repeat");

const loginBtn = document.querySelector(".btn.print");

const rojoPalido = "#dc7c7c";
const white = "#ffffff";

document.querySelectorAll(".col > .row").forEach((row) => {
  let input = row.children[0];
  let label = row.children[1];

  input.addEventListener("blur", () => {
    if (input.value) {
      label.classList.remove("animated-up");

      if (label.classList.contains("required")) {
        label.style.color = white;

        input.classList.remove("rotate");
      }
    } else {
      if (!label.classList.contains("animated-up")) {
        label.classList.add("animated-up");
      }
      if (label.classList.contains("required")) {
        label.style.color = rojoPalido;

        input.classList.add("rotate");
      }
    }
  });
});

loginBtn.addEventListener("click", () => {
  let nombre = nombreInput.value;
  let contraseña = contraInput.value;

  if (nombre && contraseña) {
    if (correoInput && repeatInput) {
      let correo = correoInput.value;
      let repeat = repeatInput.value;

      console.log({
        nombre,
        contraseña,
        correo,
        "verificacion correo": repeat,
      });
    } else {
      console.log({ nombre, contraseña });
    }
  }
});
