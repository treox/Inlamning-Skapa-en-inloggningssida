
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

    localStorage.clear();

    if (iNamn && iLosen) {
        localStorage.setItem(iNamn, iLosen);
    }
});

for (let i = 0; i < localStorage.length; i++) {
    var one = localStorage.key(i);
    var two = localStorage.getItem(one);
}

if (one === test && two === losenord) {
    alert("Grattis! Du är inloggad");
    manSidaOK();
}
else if (one && two && one !== test && two !== losenord) {
    alert("Fel användarnamn eller lösenord");
    manSidaEJOK();
}

// Andrar sidan om inloggning är ok:
function manSidaOK() {
    bodyE.removeChild(formE);
    var paraE = document.createElement("p");
    paraE.innerHTML = "Grattis! Du är inloggad.";
    bodyE.appendChild(paraE);

    bodyE.insertAdjacentHTML('beforeend', '<button id="log-outb">Logga ut</button>')
}

// Andrar sidan om inloggning inte är ok:
function manSidaEJOK() {
    bodyE.removeChild(formE);
    var paraE = document.createElement("p");
    paraE.innerHTML = "Felkod: Fel användarnamn eller lösenord.";
    bodyE.appendChild(paraE);

    bodyE.insertAdjacentHTML('beforeend', '<button id="re-turnb">Tillbaka</button>')
}

if (one === test && two === losenord) {
    let logoutb = document.getElementById("log-outb");

    logoutb.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
}
else if (one && two && one !== test && two !== losenord) {
    let returnb = document.getElementById("re-turnb");

    returnb.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
}
