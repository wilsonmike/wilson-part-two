let rain = prompt("How many inches of rain fell?"); 

let amount = "*"; 
console.log("Rainfall: " + amount.repeat(rain));
 

let yield = 50; 
if (rain >= 20) {
    yield = yield*.9;
} else if (rain < 10) {
    yield = yield*.8; 
}
//fertilizer prompt
let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "no") {
    console.log("The yield will be " + yield + " bushels per acre."); 
} else if (fertilizer === "yes") {
    var selection = prompt("Did you use premium or regular fertilizer?");
}
//premium or regular
if (selection === "premium") {
    yield = yield*1.15;
    console.log("Because you used premium fertilizer your yield will be, " + yield.toFixed(3) + " bushels per acre.");
} else if (selection === "regular") {
    yield = yield*1.10;
    console.log("Because you used regular fertilizer your yield will be, " + yield.toFixed(3) + " bushels per acre."); 
}