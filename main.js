// ## Exo1

// ### Créer une class Objet
// ### _Propriétés : nom, prix
class Object {
    constructor(nom,prix) {
        this.nom = nom,
        this.prix = prix
    }
}
let briquet = new Object("briquet", 2);
let cloppe = new Object("cloppe", 0.11);

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

let boite = [briquet, cloppe];
// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)
class Personnage {
    constructor(nom,sac,argent) {
        this.nom = nom,
        this.sac = sac,
        this.argent = argent
    }
    prendre = (objet, arr) => {
        this.sac.push(objet)
        arr.splice(arr.indexOf(objet), 1)
    }
    acheter = (vendeur, objet) => {
            this.sac.push(objet)
            this.argent = this.argent - objet.prix
            vendeur.argent = vendeur.argent + objet.prix
    }
}
// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
let romeo = new Personnage("Roméo",[],3000)
let juliette = new Personnage("Juliette",[],3000)
console.log(romeo);
romeo.prendre(briquet,boite);
juliette.prendre(cloppe,boite);
console.log(boite);
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.
romeo.acheter(juliette, cloppe)
console.log(romeo);