// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.
agora = new Date()
dataAtual = agora.getFullYear()

anoDeNascimento = 2000

idade = dataAtual - anoDeNascimento

console.log(idade)
