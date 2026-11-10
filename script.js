function passordSjekker() {
  const passord = document.querySelector("#passord").value;
  const pattern = /[`!@#$%^&*()_+\-=\[\]{};’:”\\|,.<>\/?~]/;
  const resultat = document.querySelector("#resultat");
  if (passord[0] === passord[0].toUpperCase() && pattern.test(passord)) {
    resultat.style.color = "green";
    resultat.innerHTML = "Passordet er bra nok";
  } else if (
    (passord[0] === passord[0].toUpperCase() && !pattern.test(passord)) ||
    (passord[0] !== passord[0].toUpperCase() && pattern.test(passord))
  ) {
    resultat.style.color = "orange";
    resultat.innerHTML = "Passordet mangler spesial tegn eller stor bokstav";
  } else {
    resultat.style.color = "red";
    resultat.innerHTML =
      "Passordet er ikke bra nok mangler spesiall tegn eller stor bokstav";
  }
} //henter det man skriver og sjekker om den starter med stor bokstav og har spesialtegn og gir en alert med passordet og en melding om at det er bra, greit nok eller ikke bra nok

console.log("hello world"); //teste om js filen er linka med html filen
function openingModal2() {
  document.getElementById("passordmodal").classList.remove("hiddenModal");
  document.getElementById("passordmodal").classList.add("showModal");
} // åpner modalen med at den legger til og fjener spesefike classes

function closingModal2() {
  document.getElementById("passordmodal").classList.remove("showModal");
  document.getElementById("passordmodal").classList.add("hiddenModal");
} // lukker modalen med at den legger til og fjener spesefike classes åpner modalen med at den legger til og fjener spesefike classes

// modal og sjekking av spesial karakter og stor bokstav er det nye
