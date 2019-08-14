let startFightersList = [];

let fightersNumber = prompt("Сколько бойцов участвует в пуле?", "2");
for (let m = 0; m < fightersNumber; m++) {
    let newFighterName = prompt("Введите фамилию и имя бойца", "");
    startFightersList.push(newFighterName);
}

let pairsNumber = Math.round(startFightersList.length / 2);

let pairsList = [];

for (let i = 0; i < pairsNumber; i++) {
    let fightersPair = [];
    for (let j = 0; j < 2 ; j++) {
        let fighterIndex = Math.floor(Math.random() * startFightersList.length);
        let fighterName = startFightersList.splice(fighterIndex, 1);
        fightersPair.push(fighterName);
    }
    pairsList.push(fightersPair);
};


for (let n = 0; n < pairsList.length; n++) {
    console.log((n + 1) + "-я " + "пара:");
    for (let m = 0; m < pairsList[n].length; m++) {
        console.log(pairsList[n][m].join(""));
    }
}
