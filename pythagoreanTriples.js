var triples = [];

for (var x = 1; x <= 300; x++) {
    for (var y = 1; y <= 300; y++) {
        var triple = {};
        var z = Math.hypot(x, y);
        if (Math.floor(z) === z) {
            triple.triple = [x, y, z];
            triple.pair = [x, y];
            triples.push(triple);
        }
    }
}

for (var i = 0; i < triples.length; i++) {
    for (var j = 0; j < triples.length; j++) {
        if (triples[i].pair.slice().join("") === triples[j].pair.slice().reverse().join("")) {
            triples.splice(j, 1);
        }
    }    
}

for (var i = 0; i < triples.length; i++) {
    console.log(triples[i].triple.join("; "));
}
