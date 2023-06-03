function DiakInfo(nev, csoport, tipus) {
    var eredmeny = "";
    var csoportNev = "Team" + csoport.toString() + "0";
    if (tipus) {
        eredmeny = nev + " [" + csoportNev + "] – Junior Frontend";
    }
    else {
        eredmeny = nev + " [" + csoportNev + "] – Webprogramozó";
    }
    return eredmeny;
}
console.log(DiakInfo("Minta Márton", 8, true));
console.log(DiakInfo("Kis József", 11, false));
/*2. feladat*/
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return "Példás,Példás";
    }
    if (jegy == 4) {
        return "Jó,Jó";
    }
    if (jegy == 3) {
        return "Változó,Változó";
    }
    if (jegy == 2) {
        return "Hagyag,Rossz";
    }
}
console.log(SzovegesErtekeles(5));
console.log(SzovegesErtekeles(3));
/*3. feladat*/
function HarommalOszthatokSzama(tomb) {
    var ertek = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 === 0) {
            ertek++;
        }
    }
    return ertek;
}
var tomb = [10, 23, 12, 24, 31, 33, 42, 20];
console.log(HarommalOszthatokSzama(tomb));
/*4. feladat*/
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var nyeroszamok = [];
    while (nyeroszamok.length < mennyiseg) {
        var szam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
        if (nyeroszamok.indexOf(szam) === -1) {
            nyeroszamok.push(szam);
        }
    }
    return nyeroszamok;
}
console.log(Nyeroszamok(5, 1, 90));
