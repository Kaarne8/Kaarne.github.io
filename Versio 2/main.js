let kaverit = [];


function naytaKaverit() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < kaverit.length; i++) {

        let uusiKaveri = document.createElement("li");

        uusiKaveri.textContent = kaverit[i] + " ";

        let poista = document.createElement("button");

        poista.textContent = "Poista";

        poista.onclick = function() {

            kaverit.splice(i, 1);

            naytaKaverit();
        };

        uusiKaveri.appendChild(poista);

        lista.appendChild(uusiKaveri);
    }
}


function lisaaKaveri() {

    let nimi = document.getElementById("nimi").value;

    if (nimi != "") {

        kaverit.push(nimi);

        document.getElementById("nimi").value = "";

        naytaKaverit();
    }
}


function jarjestaKaverit() {

    kaverit.sort();

    naytaKaverit();
}