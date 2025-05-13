document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nume = document.getElementById('nume');
  const prenume = document.getElementById('prenume');
  const telefon = document.getElementById('telefon');
  const errorMsg = document.getElementById('error-message');

  // Validare: Numele trebuie să înceapă cu literă mare și să conțină doar litere
  if (!/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(nume.value.trim())) {
    errorMsg.textContent = "Numele trebuie să înceapă cu literă mare și să conțină doar litere!";
    nume.focus();
    return;
  }

  // Validare: Prenumele trebuie să înceapă cu literă mare și să conțină doar litere
  if (!/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(prenume.value.trim())) {
    errorMsg.textContent = "Prenumele trebuie să înceapă cu literă mare și să conțină doar litere!";
    prenume.focus();
    return;
  }

  // Validare: Telefonul trebuie să înceapă cu +3736 sau +3737 și să aibă exact 7 cifre după prefix
  if (!/^\+373[67][0-9]{7}$/.test(telefon.value.trim())) {
    errorMsg.textContent = "Numar Invalid ! Telefonul trebuie să înceapă cu +3736 sau +3737 și să aibă exact 7 cifre după prefix.";
    telefon.focus();
    return;
  }

  errorMsg.textContent = "";

  // Salvare date în localStorage (simulare)
  localStorage.setItem('registeredUser', JSON.stringify({
    nume: nume.value.trim(),
    prenume: prenume.value.trim(),
    telefon: telefon.value.trim()
  }));

  // Redirecționează către pagina de login
  window.location.href = "/login/login.html";
});