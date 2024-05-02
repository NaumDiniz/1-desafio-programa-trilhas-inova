//  4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

let numeros = [23, 16, 11, 8, 19, 14, 5, 21]

for (let i = 1; i < numeros.length; i++) {
    let cont = 0

    for (let j = 0; j <= numeros[i]; j++) {
        if (numeros[i] % j == 0) {
            cont++
        }
    }
    if (cont == 2) {
        console.log('Os números PRIMOS indentificados foram:', numeros[i])
    }
}
