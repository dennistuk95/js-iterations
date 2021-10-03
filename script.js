let colors = ["yellow", "blue", "red", "orange"];
while (colors) {
    console.log("The color is " + colors[1]);
    colors++;
}


for (let colors = ["yellow", "blue", "red", "orange"]; colors < 5; colors++) {
    console.log("The color is " + colors);
}

var colors = ["yellow", "blue", "red", "orange"];
colors.forEach(element => console.log(element));


/*

De for loop neemt 5 regels in beslag

De forEach method neemt 1 regel in beslag

Een array method is makkelijker leesbaar omdat je eventuele fouten er direct uit haalt.

*/