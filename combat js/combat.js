// Simple combat simulation: dragon vs sorcier
let dragon = {
    name: "Mirdim",
    pointsDeVie: 1500,
    precision: 45/100, // précision entre 0 et 1
    force: 150,
};

let sorcier = {
    name: "Grim",
    pointsDeVie: 500,
    precision: 40/100,
    force: 75,
};

const combatants = [dragon, sorcier];

console.log(`Début du combat entre : ${dragon.name} et ${sorcier.name}`);

function attaque(atq, def) {
    let tirage = Math.random();
    if (tirage <= atq.precision) {
        def.pointsDeVie -= atq.force;
        console.log(`${atq.name} touche ${def.name} et inflige ${atq.force} points de dégâts.`);
    } else {
        console.log(`${atq.name} rate son attaque.`);
    }
    if (def.pointsDeVie <= 0) {
        console.log(`${def.name} est vaincu !`);
    } else {
        console.log(`${def.name} a encore ${def.pointsDeVie} points de vie.`);
    }
}

function combat(a, b) {
    while (a.pointsDeVie > 0 && b.pointsDeVie > 0) {
        attaque(a, b);
        if (b.pointsDeVie <= 0) break;
        attaque(b, a);
    }
    const winner = a.pointsDeVie > 0 ? a : b;
    console.log(`Fin du combat, le gagnant est : ${winner.name}`);
}

combat(dragon, sorcier);

