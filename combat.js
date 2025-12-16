const combatant = [dragon, sorcier]
let dragon = {
    name: "Mirdim",
    pointsDeVie: 1500,
    precision: 45/100,       // precision entre 0 et 1
    force: 150,
}

let sorcier = {
    name: "Grim",
    pointsDeVie: 500,
    precision: 40/100,      // precision entre 0 et 1
    force: 75,
}
for (fight, function fight(combat){
        if (pointsDeVie > 0){
            function dégat(DMG, adversaire) {
                if (precision(DMG)){
                    adversaire.pointsDeVie -= DMG.force 
                }}
        }
        else {(pointsDeVie >= 0)
            console.log(`fin du combat le gagnat est : ${combatant.pointsDeVie>0}`);
        }
    }
)


function dégat(DMG, adversaire) {
    if (precision(DMG)){
        adversaire.pointsDeVie -= DMG.force 
    }
    dégat(dragon, sorcier)
console.log(`Début du combat entre : ${sorcier.name} et ${dragon.name}`);
console.log(sorcier.pointsDeVie);
console.log(dragon.pointsDeVie);
}


function precision(precision) {
    if (precision < 0) precision = 0;
    if (precision > 1) precision = 1;
    return startValue + precision * (targetValue - startValue);
}
const start = 0;   
const target = 100;
console.log(precision(0, start, target));
console.log(precision(0.5, start, target));
console.log(precision(1, start, target));

