// Opdracht 4a: Maak een herbruikbare functie die een
// string genereert voor de naam van één tv en deze teruggeeft
// in het format [merk] [type] - [naam] zoals
// Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART
// - HD smart TV.
let stringName = null;

function nameTV([a]) {
    stringName = `${inventory[a].brand} ${inventory[a].type} - ${inventory[a]
        .name}`
    return (stringName);
}

nameTV([2]);
console.log("opdracht 4a:   " + stringName);


// Opdracht 4b: Maak een herbruikbare functie die de prijs van
// één tv als parameter verwacht (zoals 379 of 159) teruggeeft
// in het format €379,- of €159,-.
let newPrice = null;

function priceTV([a]) {
    newPrice = `€${inventory[a].price},-`;
    return (newPrice);
}

priceTV([1]);
console.log("Opdracht 4b:   " + newPrice);


// Opdracht 4c: Maak een herbruikbare functie die een string
// genereert voor alle beschikbare schermgroottes van één tv.
//     De functie geeft dit terug in het format [schermgrootte]
// inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches
// ([schermgrootte omgerekend]cm) etc. Als een tv maar één
// schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58])
// wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch
// (147 cm). Let op: om één string te genereren uit een array van
// schermgroottes zul je een for-loop voor moeten gebruiken.

let sizesString = null;

function allScreenSizes([a]) {
    for (let i = 0; i < inventory[a].availableSizes.length; i++) {
        sizesString += `${inventory[a].availableSizes[i].toFixed(2) + " inch (" + (inventory[a].availableSizes[i] * 2.61).toFixed(2) + "cm) | "
        }`;

    }
    return (sizesString);
}

allScreenSizes([3]);
console.log("Opdracht 4c: " + sizesString);


// Opdracht 4d: Schrijf een script die de informatie van de Philips
// 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand
// voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht
// 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
//     €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

const tableField = document.getElementById("table-field");

function infoTVOnPage() {
    function nameTV([a]) {
        stringName = `${inventory[a].brand} ${inventory[a].type} - ${inventory[a]
            .name}`
        return (stringName).innerHTML;
    }

    inventory.map((tv) => {
        return tableField.innerHTML += `
<tr>
     <td id="name-field">${nameTV([tv])}</td>
</tr>
`
    });
}
infoTVOnPage("television");
// <td id="price-TV">${priceTV([tv])}</td>
// <td id="all-ScreenSizes">${allScreenSizes([tv])}</td>
// Opdracht 4e: Maak een herbruikbare functie die de informatie van
// alle tv's weergeeft op de pagina. Gebruik hiervoor de '
// 'map-methode in combinatie met de functies die je hebt gemaakt
// in opdracht 4a, 4b en 4c.
