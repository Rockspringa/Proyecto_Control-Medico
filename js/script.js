const nombreInput = document.getElementById("nombre");
const contraInput = document.getElementById("contraseña");
const loginBtn = document.getElementById("login-btn");

document.querySelectorAll("form.col-1 > .row").forEach((row) => {
  let input = row.children[0];
  let label = row.children[1];

  input.addEventListener("blur", () => {
    if (input.value) {
      label.classList.remove("animated-up");
    } else if (!label.classList.contains("animated-up")) {
      label.classList.add("animated-up");
    }
  });
});

loginBtn.addEventListener("click", () => {
  let nombre = nombreInput.value;
  let contraseña = contraInput.value;

  if (nombre && contraseña) console.log({ nombre, contraseña });
});
