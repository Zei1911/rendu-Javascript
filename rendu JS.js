// // //Exo 1&2
// // const firstName = "Enzo"
// // const age =18
// // console.log("Je m'appelle " + firstName,"J'ai " + age);
// // console.log(`Je m'appelle ${firstName} et j'ai ${age}`);


// // //Exo 3
// // let a = 19
// // let b = 11
// // let result = a + b
// // console.log(`${a} + ${b} = ${result}`)

// // //Exo 4
// // let JPO= true
// // if(JPO){
// //     console.log("La porte est ouverte")
// // }else{
// //     console.log("La porte est fermé mange tes morts")
// // }

// // //Exo 5
// // const whatName = prompt("Quel est votre prénom ?")
// // console.log(`Votre prénom est ${whatName}`);

// // //Exo 6
// // const code = 1911
// // let usercode = prompt("Entrez le code SVP")
// // if (code === usercode) {
// //     console.log(" Le coffre est ouvert GG");    
// // }else {
// //     console.log("Code incorrect, c'est fermer domage ;p");
// // }

// // //EXO FONCTION
// // // Exo 1
// // function helloWorld() {
// //     console.log("Hello world !");   
// // }
// // helloWorld()

// // //Exo 2
// // function greets(firstName) {
// //     console.log(`Bonjour ${firstName}, comment allez vous ?`);
    
// // }
// // greets("Enzo")

// // //Exo 3
// // function addition(a, b) {
// //     console.log(a + b);
// // }
// // addition(19, 11)

// // //Exo 4
// // function operation(a, b, c) {
// //     if (c){
// //     console.log(a + b );
// // } else {console.log(a - b);
// // }
// // operation(19, 11, true)

// // EXO BOUCLE
// // Exo 1

// function compteur() {
//     for (let i = 1; i < 6; i++) {
//         const element = array[i];
//         console.log(i);
//     }
// }
// compteur()

// //Exo 2
// function repete() {
//     let mot =prompt("Entrez un mot")
//     for (let i = 0; i < 5; i++) {
//         console.log(mot);  
//     }
// }

// repete()

// EXO MACHINE A CAFE
//60ml d'eau et 8g de café moulu et coute 1,45€

// const price = 1.45
// const client = 21
// const waterCost = 60
// const coffeeCost = 8

// let water = 2000
// let molde = 200
// let money = 0
// let unluckyclient = 0

// function numbreClient() {
//     for (let client = 0; client < 21; client++) {
//         console.log(`vous étes le client numéro ${client}`);
//     }
// }
// numbreClient()

// function preparation(){
//     if (water > waterCost) {
//         console.log(water -= waterCost, `Il reste encore ${water}ml d'eau.`
//         );
//     }
//     if (molde > coffeeCost) {
//         console.log(molde -= coffeeCost, `Il reste ${molde}g de café moulu.`
//         );
//     }
//     if (money + price) { 
//         console.log(water + price,`Le gain total de la machine est de ${money}€`
//         );
//     } 
// }
// preparation()


// const price = 1.45
// const maxClients = 21
// const waterCost = 60
// const coffeeCost = 8

// let water = 2000
// let molde = 200
// let money = 0

// function numberClient() {
//     for (let i = 1; i <= maxClients; i++) {
//         console.log(`Vous êtes le client numéro ${i}`)
//         preparation()
//     }
// }

// function preparation() {
//     if (water >= waterCost && molde >= coffeeCost) {
//         water -= waterCost
//         molde -= coffeeCost
//         money += price

//         console.log(`Café servi ☕`)
//         console.log(`Eau restante : ${water} ml`)
//         console.log(`Café restant : ${molde} g`)
//         console.log(`Gain total : ${money.toFixed(2)} €`)
//         console.log('-------------------')
//     } else {
//         console.log(`❌ Plus assez de ressources`)
//     } console.log(`=============================`);
//     console.log(` `)
    
// }

// numberClient()

// //Tableau        0        1         2
// let fruits = ["pomme", "poire", "banane"]
// console.log(fruits[0]);
// for (let if = 0; if < fruits.length; if++) {
//     const fruits = fruits[i];
// }

// for (const fruits of fruits) {
//     console.log(fruits);
// }

// fruits.forEach(function(fruits){
//     console.log(fruits);
    
// })

// fruits.forEach(fruits =>(console.log(fruits));)
// fruits.forEach(fruits =>{

// }

// //Exo 1
// let color = ["rouge","bleu","noir"]
// color.forEach(color =>consol.log(color))

// //EXO 2
// colors.push("blanc")
// console.log(colors);

// colors.splice(1, 1)
// console.log(colors);


// //Exo 3
// let appels = ["pomme Rouge", "pomme verte", "pomme jaune","pomme Rouge", "pomme verte", "pomme jaune","pomme Rouge", "pomme verte", "pomme jaune","pomme Rouge"]
// let pommeRouge = 0, let pommeVerte = 0, let pommeJaune =0 

// for (const apple of appels) {
//     for (let i = 0; i < appels.length; i++) {
//          if (appel.toLowerCase()=== "pommeRouge"){
//         pommeRouge++
//     }else if (appel.toLowerCase()=== "pommeVerte"){
//         pommeVerte++
//     }else if (appel.toLowerCase()=== "pommeJaune"){
//         pommeJaune++
//     }
// }
//     const appel = appels[i]
// }
// appels.forEach()
//     if (appel.toLowerCase()=== "pommeRouge"){
//         pommeRouge++
//     }else if (appel.toLowerCase()=== "pommeVerte"){
//         pommeVerte++
//     }else if (appel.toLowerCase()=== "pommeJaune"){
//         pommeJaune++
//     }
// }

// appels.forEach(function(appel) {
//      if (appel.toLowerCase()=== "pommeRouge"){
//         pommeRouge++
//     }else if (appel.toLowerCase()=== "pommeVerte"){
//         pommeVerte++
//     }else if (appel.toLowerCase()=== "pommeJaune"){
//         pommeJaune++
//     }
// })

// console.log("Pomme rouge", pommeRouge);
// console.log("Pomme verte", pommeVerte);
// console.log("Pomme jeune", pommeJaune);

// //objet
// let person = {
//     name: "Terry",
//     age: 18,
//     city: "Nanterre",
// }

// console.log(person.name);

// //Exo 4
// let object = {
//     names: "Terry",
//     ages: 18,
//     sentMsg :"false" 
// }

// let enzo = {
//     name:"Enzo",
//     age: "18",
//     sentMsg: false,
// }

// let killian = {
//     name: "Killian",
//     age: "19",
//     sentMsg: false,
// } 

// //Exo 5
// let luca = {
//     name: "Luca",
//     ages: 15,
//     sentMsg :false 
// }

// let enzo = {
//     name:"Enzo",
//     age: 18,
//     sentMsg: false,
// }

// let killian = {
//     name: "Killian",
//     age: 19,
//     sentMsg: false,
// } 
// let persons = [enzo, luca, killian]

// //Exo 6
// persons.forEach(function(person){
//     if (person.age >= 18) {
//         person.sentMsg = true
//     }
// })

// let noInvites = persons
//     .filter(person => !person.sentMsg)
//     .map(person => person.name);

// console.log(`Toutes les invitations ont été envoyées, sauf à : ${noInvites.join(', ')}`
// );

// let dragon = {
//     name: "Mirdim",
//     pointsDeVie: 1500,
//     precision: 0.45,  // précision entre 0 et 1
//     force: 150,
// };

// let sorcier = {
//     name: "Grim",
//     pointsDeVie: 500,
//     precision: 0.40,
//     force: 75,
// };

// const combatants = [dragon, sorcier];

// console.log(`Début du combat entre : ${dragon.name} et ${sorcier.name}`);

// function attaque(atq, def) {
//     let tirage = Math.random();
//     if (tirage <= atq.precision) {
//         def.pointsDeVie -= atq.force;
//         console.log(`${atq.name} touche ${def.name} et inflige ${atq.force} points de dégâts.`);
//     } else {
//         console.log(`${atq.name} rate son attaque.`);
//     }
//     if (def.pointsDeVie <= 0) {
//         console.log(`${def.name} est vaincu !`);
//     } else {
//         console.log(`${def.name} a encore ${def.pointsDeVie} points de vie.`);
//     }
// }

// attaque(dragon, sorcier);
// if (sorcier.pointsDeVie > 0) {
//     attaque(sorcier, dragon);
// }

// console.log(`Fin du combat :`);
// console.log(`${dragon.name} a ${dragon.pointsDeVie} points de vie.`);
// console.log(`${sorcier.name} a ${sorcier.pointsDeVie} points de vie.`);