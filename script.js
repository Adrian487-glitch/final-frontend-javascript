function passordSjekker() {
  const passord = document.querySelector("#passord").value;
  const resultat = document.querySelector("#resultat");
  let harStorBokstav = false; // setter harstorbokstav til usant
  if (passord.length === 0) {
    resultat.style.color = "white";
    resultat.textContent = "Skriv inn passordet"; // gjør at hvis man trykker på test uten at man har skrevet inn noe så vil det komme en tekst i hvit som sier skriv inn passordet
  }
  for (let i = 0; i < passord.length; i++) {
    if (
      passord.charAt(i) === passord.charAt(i).toUpperCase() &&
      passord.charAt(i) !== passord.charAt(i).toLowerCase()
    ) {
      harStorBokstav = true;
    } // sjekker om passordet har stor bokstav og lagrer det hvis den har det
    if (
      harStorBokstav === true &&
      /[!@#$%^&*(),.?":{}|<>]/.test(passord) &&
      passord.length >= 5
    ) {
      resultat.style.color = "green";
      resultat.textContent =
        "Passordet ditt er: " +
        passord +
        " det oppfyller alle kravene: minst 5 tegn, én stor bokstav og ett spesialtegn."; // sjekker om den har minst en stor bokstav, er minst 5 bokstaver lang og har et spesial tegn gir grønn tekst hvis kravene er møtt
      break; // får koden til å hoppe ut av loopen
    } else if (
      harStorBokstav === true ||
      /[!@#$%^&*(),.?":{}|<>]/.test(passord)
    ) {
      resultat.style.color = "orange";
      resultat.textContent =
        "Passordet ditt er: " +
        passord +
        " det oppfyller noen av kravene. Sjekk at det har minst 5 tegn, én stor bokstav og ett spesialtegn.."; // sjekker om passordet har minst en stor bokstav eller har et spesiall tegn gir oransje tekst hvis noen av kravene er møtt
    } else {
      resultat.style.color = "red";
      resultat.textContent =
        "Passordet ditt er: " +
        passord +
        " det mangler stor bokstav og spesialtegn. Det må også være minst 5 tegn langt."; // sjekker om den har ingen av delene gir rød tekst hvis kravene ikke  møtt
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
} // gjør at vis knappen viser oss hva det står ved at den endrer input typen til text eller endrer typen til passord

const meter = document.getElementById("passordmeter");
passord.addEventListener("input", function () {
  let passordmeter = 0;
  for (let i = 0; i < passord.value.length; i++) {
    passordmeter += 10; // plusse på 10 på meteren for hver bokstav
  }
  meter.value = passordmeter;
}); // endrer på strength meteren med hvor mange bokstaver passordet har

console.log("hello world"); //teste om js filen er linka med html filen
function openingModal2() {
  const passordInput = document.querySelector("#passord");
  if (passordInput.type === "text") {
    passordInput.type = "password";
  }
  document.getElementById("passordmodal").classList.remove("hiddenModal");
  document.getElementById("passordmodal").classList.add("showModal");
} // åpner modalen med at den legger til showmodal classen og fjener hiddenmodal classen

function closingModal2() {
  resultat.textContent = "";
  document.getElementById("passordmodal").classList.remove("showModal");
  document.getElementById("passordmodal").classList.add("hiddenModal");
} // lukker modalen med at den legger til hiddenmodal classen og fjener showmodal classen

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

// dæm 2 tingene som e ny er modalen og charat metoden
