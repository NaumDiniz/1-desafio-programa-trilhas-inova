// 10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

letras =
    'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY'
cont = 0

console.log(letras.split(''))
// console.log(letras[1])

// for (letra in letras) {
//     console.log(letra)
// }
for (i = 0; i < letras.length; i++) {
    if (letras[i] == ' ') {
        continue
    } else if (letras[i] == letras[i].toUpperCase()) {
        console.log(letras[i], (end = ''))
        cont++
    }
}

console.log('De', letras.length, ' letras. Existem', cont, 'letras maiusculas')
