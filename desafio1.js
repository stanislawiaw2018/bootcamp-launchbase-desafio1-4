//VARIÁVEIS
let maior = 0
//USUÁRIO
const user = {
    name: "Antonio Stanislaw",
    transactions: [

    ],
    balance: 0
}


//declaração de funções
function createTransaction(type, value){
    if (type == "credit"){
        var transaction = {
            type1: type,
            value1: value
        }
        user.transactions.push(transaction)
        user.balance = user.balance +transaction.value1
        // console.table(user.transactions)
        // console.log(user.balance)

    }else if(type == "debit"){
        var transaction = {
            type1: type,
            value1: value
        }
        user.transactions.push(transaction)
        //Contabiliza o saldo
        user.balance = user.balance - transaction.value1
        // detalha as transações
        
    }
    console.table(user.transactions)
}

function getHigherTrasactionByType(type){    

        for (let i in user.transactions){
            

                if ((user.transactions[i].type1 == type) && (maior < user.transactions[i].value1)){
                    maior = user.transactions[i]
                    // console.log(i)
                    
                }
            
        }
        console.log(maior)
    
}

//Chamando as funções
/* ########## CRÉDITO ########## */
createTransaction("credit", 10)
createTransaction("credit", 290)
createTransaction("credit", 70)
createTransaction("credit", 600)

/* ########### DÉBITO ############*/
createTransaction("debit", 50)
createTransaction("debit", 700)

console.log(`My balance is: R$ ${user.balance.toFixed(2)}`)
getHigherTrasactionByType("credit")
// maior = getHigherTrasactionByType("debit")
// console.log(user.transactions[0].value1)
// console.log(maior)