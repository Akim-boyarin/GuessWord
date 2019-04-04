var startFightersList = [];

var fightersNumber = prompt("Сколько бойцов участвует в пуле?", "2");
for (var m = 0; m < fightersNumber; m++) {
    var newFighterName = prompt("Введите фамилию и имя бойца", "");
    startFightersList.push(newFighterName);
}

var pairsNumber = Math.round(startFightersList.length / 2);

var pairsList = [];

for (var i = 0; i < pairsNumber; i++) {
    var fightersPair = [];
    for (var j = 0; j < 2 ; j++) {
        var fighterIndex = Math.floor(Math.random() * startFightersList.length);
        var fighterName = startFightersList.splice(fighterIndex, 1);
        fightersPair.push(fighterName);
    }
    pairsList.push(fightersPair);
};

for (var n = 0; n < pairsList.length; n++) {
    console.log((n + 1) + "-я " + "пара:");
    for (var m = 0; m < pairsList[n].length; m++) {
        console.log(pairsList[n][m].join(""));
    }
}
