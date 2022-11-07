//Opdracht 3a:
//Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI,
//etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit
//ook zou werken als we 200 tv's in onze array zouden hebben staan. ' +
//'Dat er dubbele namen in zitten, is niet erg.

const listField = document.getElementById("list-field");
inventory.map((tv) => {
    return listField.innerHTML += `
      <ul>
      <li id = "tv-brand">brand is ${tv.brand}</li>
      </ul>
`
});


//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array
//met tv-objecten verwacht. Het is handig om onze scripts als functies
//op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
//Tip: vergeet deze functie -declaratie niet aan te roepen!