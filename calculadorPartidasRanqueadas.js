function calculadorRank (vitorias, derrotas){
	return vitorias - derrotas
}
let saldoVitorias = calculadorRank (81,21)

const mensagem = "O herói tem saldo de " + saldoVitorias + " vitórias e está no nível " 
   
if(saldoVitorias <= 10){
        nivel= "Ferro"
    }
    else if (saldoVitorias >= 11 && saldoVitorias<= 20){
        nivel = "Bronze"
    }
    else if (saldoVitorias >= 21 && saldoVitorias <=50 ){
        nivel = "Prata"
    }
    else if (saldoVitorias >= 51 && saldoVitorias <=80 ){
        nivel = "Ouro"
    }
    else if (saldoVitorias >= 81 && saldoVitorias <=90 ){
        nivel = "Diamante"
    }
    else if (saldoVitorias >= 91 && saldoVitorias <=100 ){
        nivel = "Lendário"
    }
    else{
        nivel = "imortal"
    }
    console.log (mensagem + nivel)