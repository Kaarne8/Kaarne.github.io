let kaverit = [];

function naytaKaverit() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    kaverit.forEach(function(kaveri, index) {
        let uusiKaveri = document.createElement("li");
        uusiKaveri.textContent = kaveri + " ";

        let poista = document.createElement("button");
        poista.textContent = "Poista";
        poista.onclick = function() {
            kaverit.splice(index, 1);
            naytaKaverit();
        };

        uusiKaveri.appendChild(poista);
        lista.appendChild(uusiKaveri);
    });
}

function lisaaKaveri() {
    let input = document.getElementById("nimi");
    let nimi = input.value.trim();

    if (nimi !== "") {
        kaverit.push(nimi);
        input.value = "";
        naytaKaverit();
    }
}

function jarjestaKaverit() {
    kaverit.sort();
    naytaKaverit();
}
