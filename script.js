
var test = "test";
var losenord = "1234";

let bodyE = document.getElementById("body-id");
let formE = document.getElementById("form-id");
let inpNamn = document.getElementById("namn-id");
let inpLosen = document.getElementById("losen-id");
let loginB = document.getElementById("loginb-id");

loginB.addEventListener('click', function() {
    let iNamn = inpNamn.value;
    let iLosen = inpLosen.value;

    if (iNamn === test && iLosen === losenord) {
        alert("Grattis! Du är inloggad");
        manSidaOK();
    }
    else {
        alert("Fel användarnamn eller lösenord");
    }
});

// Andrar sidan om inloggning är ok:
function manSidaOK() {
    bodyE.removeChild(formE);
    var paraE = document.createElement("p");
    paraE.innerHTML = "Grattis! Du är inloggad.";
    bodyE.appendChild(paraE);
}
