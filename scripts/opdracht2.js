//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
console.log("opdracht2a: ");


const soldTVs = inventory.map((television) => {
    return television.sold;
});

let totalSoldTVs = 0;
for (let i = 0; i < soldTVs.length; i++) {
    totalSoldTVs += soldTVs[i];

}
console.log("Total TV's sold: " + totalSoldTVs);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina

const numberSoldTVs = document.getElementById('number-SoldTVs');
console.log("opdracht 2b : ");
numberSoldTVs.innerHTML = totalSoldTVs;
numberSoldTVs.style.color = "#26ED49";
numberSoldTVs.style.fontSize = "xx-large";

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
console.log("opdracht2c: ");
const boughtTVs = inventory.map((television) => {
    return television.originalStock;
});
let startStockOfTVs = 0;
for (let i = 0; i < boughtTVs.length; i++) {
    startStockOfTVs += boughtTVs[i];
}
console.log("TV's bought at the start: " + startStockOfTVs);
//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const stockAtStart = document.getElementById("stock-AtStart");
stockAtStart.textContent = startStockOfTVs;
stockAtStart.style.color = "#0080ff";
stockAtStart.style.fontSize = "xx-large";

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
console.log("opdracht2e: ");
const inStockTVs = document.getElementById('in-StockTVs');
inStockTVs.innerHTML = startStockOfTVs - totalSoldTVs;
inStockTVs.style.color = "#FC1723";
inStockTVs.style.fontSize = "xx-large";