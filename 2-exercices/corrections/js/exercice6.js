let nb = 0
do {
  nb = prompt('Saisir un nombre < 100')
  nb = parseInt(nb)
} while( nb > 100 )

for(let i = nb; i <= 100; i++) {
  console.log(i)
}