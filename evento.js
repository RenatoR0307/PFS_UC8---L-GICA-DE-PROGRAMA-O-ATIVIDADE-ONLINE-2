       console.log("Olá, escolha a data do evento! ")
//Data formato americano (mes/dia/ano)
       let dataAtual = new Date()
//informe abaixo a data do evento.
let dataEvento = new Date('10-19-2021')

        console.log("Data escolhida " + new Intl.DateTimeFormat('pt-BR').format(dataEvento))

    if(dataEvento >= dataAtual){

       console.log("Escolha uma palestra!")

    let eventoSele = "Lógica de programação"

        console.log("Palestra selecionada:")

    switch (eventoSele) {
        case "Lógica de programação":
            console.log("Lógica de programação: Palestrante Thiago Nascimento")
            break;
        case "Metodologias Ágeis":
            console.log("Metodologias Ágeis: Palestrante Odirlei Sabella")
            break

        default:
            console.log("Evento invalido,Escolha uma palestra!")
            break;
    }

    let palestra1 = ["Ana","Pedro","Renata","Juliana"]

if (palestra1.length < 100)
{

     console.log("Informe sua idade")

let dataA = new Date().getFullYear()
let dataNacimento = "03/07/1988"
let dataInformada = dataNacimento.split('/')[2]
let idade = dataA-dataInformada
console.log("idade informada: " + idade + " anos")

if (idade >= 18)
{
    console.log("Informe seu nome: ")

    let nome = "Renato"
    palestra1.push(nome)
    console.log(nome)

    console.log("Informe seu e-mail")

    console.log ("Cadastro concluido com sucesso!")
    console.log ("Lista de participantes: ")

    for (let i = 0; i < palestra1.length; i++) {
        const listaAtual = palestra1[i]
        console.log (listaAtual)
    }

    
}

else {

    console.log ("Cadastro não permitido, idade inferior a 18 anos")
}
     
 } else 
 
     console.log("Limite de participantes excedido!")

}   else

{
    console.log("Data invalida, escolha uma nova data! ")

}
