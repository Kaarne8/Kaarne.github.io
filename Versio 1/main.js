let kaverit = [];

for (let i = 0; i < 10; i++) {

    let nimi = prompt("Kaverin nimi:");

    kaverit.push(nimi);
}

for (let i = 0; i < kaverit.length; i++) {

    let uusiKaveri = document.createElement("li");

    uusiKaveri.textContent = kaverit[i];

    document.getElementById("kaverilista").appendChild(uusiKaveri);
}