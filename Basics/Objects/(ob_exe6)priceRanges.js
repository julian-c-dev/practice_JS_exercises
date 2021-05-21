//My exercise:

let rangePrices = [];

const priceLow = prices("Low", 0.1, 10);
const priceMed = prices("Medium", 10.1, 30);
const priceHigh = prices("High", 30.1, 100);

function addArray(element) {
  rangePrices += element;
}

addArray(priceLow);
addArray(priceMed);
addArray(priceHigh);

console.log(rangePrices);

//Mosh approach:

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [{ averagePerPerson: 5 }];
