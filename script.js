function passordSjekker() {
  const passord = document.querySelector("#passord").value;
  const resultat = document.querySelector("#resultat");
  let harStorBokstav = false;
  for (let i = 0; i < passord.length; i++) {
    if (
      passord.charAt(0) === passord.charAt(0).toUpperCase() &&
      /[!@#$%^&*(),.?":{}|<>]/.test(passord) &&
      passord.length >= 5
    ) {
      resultat.style.color = "green";
      resultat.textContent =
        "Passordet ditt er: " + passord + " og det er bra.";
      break;
    } else if (
      passord.charAt(0) === passord.charAt(0).toUpperCase() ||
      /[!@#$%^&*(),.?":{}|<>]/.test(passord)
    ) {
      resultat.style.color = "orange";
      resultat.textContent =
        "Passordet ditt er: " +
        passord +
        " og det er greit nok men bør være lengre.";
      break;
    } else {
      resultat.style.color = "red";
      resultat.textContent =
        "Passordet ditt er: " + passord + " og det er ikke bra nok.";
      break;
    }
  }
} //henter det man skriver og sjekker om den starter med stor bokstav og har spesialtegn og gir en alert med passordet og en melding om at det er bra, greit nok eller ikke bra nok

function visPassord() {
  const passordInput = document.querySelector("#passord");
  if (passordInput.type === "password") {
    passordInput.type = "text";
  } else {
    passordInput.type = "password";
  }
} // gjør at vis knappen viser oss hva det står

const meter = document.getElementById("passordmeter");
passord.addEventListener("input", function () {
  let passordmeter = 0;
  for (let i = 0; i < passord.value.length; i++) {
    passordmeter += 10;
  }
  meter.value = passordmeter;
}); // endrer på strength meteren

console.log("hello world"); //teste om js filen er linka med html filen
function openingModal2() {
  document.getElementById("passordmodal").classList.remove("hiddenModal");
  document.getElementById("passordmodal").classList.add("showModal");
} // åpner modalen med at den legger til og fjener spesefike classes

function closingModal2() {
  resultat.textContent = "";
  document.getElementById("passordmodal").classList.remove("showModal");
  document.getElementById("passordmodal").classList.add("hiddenModal");
} // lukker modalen med at den legger til og fjener spesefike classes åpner modalen med at den legger til og fjener spesefike classes

function mørkemodus() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.querySelector("p").style.border = "5px solid white";
  document.getElementById("mørkemodus").style.visibility = "hidden";
  document.getElementById("lysmodus").style.visibility = "visible";
} // endrer bakgrunn, font til mørk modus og legger til en border på p taggen for å gjøre den mer synlig i mørk modus
function lysmodus() {
  document.body.style.backgroundColor = "blanchedalmond";
  document.body.style.color = "black";
  document.querySelector("p").style.border = "5px solid black";
  document.getElementById("lysmodus").style.visibility = "hidden";
  document.getElementById("mørkemodus").style.visibility = "visible";
} // endrer bakgrunn, font til lys modus og legger til en border på p taggen for å gjøre den mer synlig i lys modus
