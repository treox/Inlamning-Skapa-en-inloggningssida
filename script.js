
let bodyE = document.getElementById("body-id");
let inpNamn = document.getElementById("namn-id");
let inpLosen = document.getElementById("losen-id");
let loginB = document.getElementById("loginb-id");

loginB.addEventListener('click', function() {
    let iNamn = inpNamn.value;
    let iLosen = inpLosen.value;

    alert(iNamn + ': ' + iLosen);
});