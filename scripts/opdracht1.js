//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

console.log('opdracht1a: ');
const tvTypes = inventory.map((television) => {
    return television.type;
});
console.log(tvTypes);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// Log de uitkomst in de console.
console.log('opdracht1b: ');
const soldOutTVs = inventory.filter((television) => {
    return ((television.originalStock - television.sold) === 0);
});
console.log(soldOutTVs);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// Log de uitkomst in de console.

console.log('opdracht 1c: ');
const ambilightTVs = inventory.filter((television) => {
    return (television.options.ambiLight === true);
});
console.log(ambilightTVs);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.
console.log('opdracht 1d: ');
const sortedTelevisions = inventory.sort((a,b) => {
    return a.price - b.price;
});
console.log(sortedTelevisions);