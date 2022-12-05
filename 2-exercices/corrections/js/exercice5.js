let nb = 0
do {
  nb = prompt('Saisir un nombre compris entre 0 et 10')
  nb = parseInt(nb)
} while( nb < 0 || nb > 10 )
console.log(`Nombre saisi est ${nb}`)