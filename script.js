// script.js - validación y mensajes (solo un listener)
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();

  if (!name || !email || !/\S+@\S+\.\S+/.test(email)) {
    showMessage("Por favor completa nombre y un correo válido.", "error");
    return;
  }

  showMessage("¡Gracias! Tu mensaje fue enviado.", "success");
  form.reset();

  // Si mañana quieres enviar a un servidor, aquí harías fetch() a tu API.
});

function showMessage(text, type) {
  let msg = document.getElementById("formMessage");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "formMessage";
    // colocamos el mensaje arriba del formulario
    const formEl = document.getElementById("contactForm");
    formEl.prepend(msg);
  }
  msg.textContent = text;
  msg.className = type; // .success o .error
  setTimeout(()=> { if(msg) msg.remove(); }, 5000);
}

