var verjaardag = new Date();
document.getElementById("date").innerText = "het is " + verjaardag;


function button() {
    const pi = 3.14;

    let input = document.getElementById("inputBtn").value;

    document.getElementById("diameter").innerText = "Omtrek: " + pi * input;

    document.getElementById("omtrek").innerText = "Oppervlakte: " + input * input * pi * 0.25;
}