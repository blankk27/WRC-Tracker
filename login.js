document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nume = document.getElementById('nume');
  const prenume = document.getElementById('prenume');
  const parola = document.getElementById('parola');
  const errorMsg = document.getElementById('error-message');

  // Verificare: nume începe cu literă mare și conține doar litere
  if (!/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(nume.value.trim())) {
    errorMsg.textContent = "Numele trebuie să înceapă cu literă mare și să conțină doar litere!";
    nume.focus();
    return;
  }

  // Verificare: prenume începe cu literă mare și conține doar litere
  if (!/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(prenume.value.trim())) {
    errorMsg.textContent = "Prenumele trebuie să înceapă cu literă mare și să conțină doar litere!";
    prenume.focus();
    return;
  }

  // (Opțional) Verificare dacă parola nu este goală
  if (!parola.value.trim()) {
    errorMsg.textContent = "Introduceți parola!";
    parola.focus();
    return;
  }

  // Dacă toate verificările trec, redirecționează către main.html
  errorMsg.textContent = "";
  window.location.href = "main.html";
});