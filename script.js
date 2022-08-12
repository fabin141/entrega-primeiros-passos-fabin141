let nome=prompt("Entre com o nome do aluno");

    if(nome.length < 5){
        alert("Nome é inválido");
    }

let presenca = parseInt(prompt("Qual a presença?"));

    if(presenca > 10 || presenca < 0){
        alert("Valor é inválido")
    }

let materiaMatematica = prompt("Digite a matéria Matemática");
let ntMatematica  = parseFloat(prompt("Qual a nota?"))
    
    if(ntMatematica > 10 || ntMatematica < 0){
        alert("Valor é inválido")
    }

let materiaPortugues = prompt("Digite a matéria Português");
let ntPortugues = parseFloat(prompt("Qual a nota?"))

    if(ntPortugues > 10 || ntPortugues < 0){
        alert("Valor é inválido")
    }

let materiaInformatica=prompt("Digite a matéria Informática");
let ntInformatica=parseFloat(prompt("Qual a nota?"))

    if(ntInformatica > 10 || ntInformatica < 0){
        alert("Valor é inválido")
    }

let materiaGeografia = prompt("Digite a matéria Geografia");
let ntGeografia = parseFloat(prompt("Qual a nota?"))

    if(ntGeografia > 10 || ntGeografia < 0){
        alert("Valor é inválido")
    }

let materiaIngles = prompt("Digite a matéria Inglês");
let ntIngles = parseFloat(prompt("Qual a nota?"))

    if(ntIngles > 10 || ntIngles < 0){
        alert("Valor é inválido")
    }

let materiaHistoria = prompt("Digite a matéria História");
let ntHistoria = parseFloat(prompt("Qual a nota?"))

    if(ntHistoria > 10 || ntHistoria < 0){
        alert("Valor é inválido")
    }

let materiaFilosofia = prompt("Digite a matéria Filosofia");
let ntFilosofia = parseFloat(prompt("Qual a nota?"))

    if(ntFilosofia > 10 || ntFilosofia < 0){
        alert("Valor é inválido")
    }

let materiaSociologia = prompt("Digite a matéria Sociologia");
let ntSociologia = parseFloat(prompt("Qual a nota?"))

    if(ntSociologia > 10 || ntSociologia < 0){
        alert("Valor é inválido")
    }

let materiaLiteratura = prompt("Digite a matéria Literatura");
let ntLiteratura = parseFloat(prompt("Qual a nota?"))
 
    if(ntLiteratura > 10 || ntLiteratura < 0){
        alert("Valor é inválido")
    }

let materiaEducacaoFisica = prompt("Digite a matéria Educação Física");
let ntEducacaoFisica = parseFloat(prompt("Qual a nota?"))

    if(ntEducacaoFisica > 10 || presenca < 0){
        alert("Valor é inválido")
    }

let somaNota = ntGeografia + ntInformatica + ntMatematica + ntPortugues + ntIngles + ntHistoria + ntFilosofia + ntSociologia + ntLiteratura + ntEducacaoFisica;

let mediaNota = somaNota/10;


    if(mediaNota >= 8 && presenca >= 6){
        alert(`A nota MÉDIA do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno aprovado!`)
    }else{
        alert(`A nota MÉDIA do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`)
    }