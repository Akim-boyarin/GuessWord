let triples = [];
let range = 300;

for (let x = 1; x <= range; x++) {
    for (let y = 1; y <= range; y++) {
        let triple = {};
        let z = Math.hypot(x, y);
        if (Math.floor(z) === z) {
            triple.triple = [x, y, z];
            triple.pair = [x, y];
            triples.push(triple);
        }
    }
}

for (let i = 0; i < triples.length; i++) {
    for (let j = 0; j < triples.length; j++) {
        if (triples[i].pair.slice().join("") === triples[j].pair.slice().reverse().join("")) {
            triples.splice(j, 1);
        }
    }    
}

for (let i = 0; i < triples.length; i++) {
    console.log(triples[i].triple.join("; "));
}
