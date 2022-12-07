// Commentaire sur une ligne cad ligne non interprété par JS
/**
 * Commentaire
 * sur
 * plusieurs
 * lignes
 */

// Variables
let firstName = 'glodie' // Algobox firstName EST DE TYPE CHAINE ensuite firstName PREND LA VALEUR 'glodie'
firstName = 'toto'

// constantes
const franceCapital = 'paris' // information qui ne varie pas dans le temps(au cours de l'exécution de votre programme)

// conditions (strutures conditionnelles)
if(firstName === 'glodie') { // test condition 1
  // Algobox SI ...DEBUT DE SI ... FIN DE SI
  // == égalité au niveau de la valeur
  // === égalité au niveau de la valeur et du type
} else if (firstName === 'jean') { // test condition 2

}
else { // ni condition 1 ni condition 2

}

// Opérateurs logiques

// ET &&
// OU ||
// Différent !

// Autre manière d'écrire des conditions qu'avec if
switch(firstName) {
  case 'glodie': // ie firstName == 'glodie'
    // operation 1
  break;
  case 'jean':
    // operation 2
  break;
}

// Boucle for (pour de..A...)
// for (initialisation compteur; condition; incrémentation)
for(let i = 0; i < 10; i++) {
  // traitement 1
}

// Boucle tant que (while)
// while (condtion)
let j = 10
while( j < 32) { // si la condition n'est pas vrai dès le départ, je ne rentre jamais dans la boucle
  // traitement 2
}

// boucle faire tant que (do while)
do{ // si la condition n'est pas vrai dès le départ, je rentre au moins une fois dans la boucle

}
while( j < 32)

// Tableaux une dim
// déclaration
let tabDim = []
// remplissage
// tabDim1[index ou rang ou indice ici]
tabDim1[0] = 0
tabDim1[1] = 1

// Tableaux 2D
// déclaration
let tabDim2 = [[]]
// remplissage
// tabDim1[index ou rang ou indice ici]
tabDim1[0][0] = 0
tabDim1[0][1] = 1