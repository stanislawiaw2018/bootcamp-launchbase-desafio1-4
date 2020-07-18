//USUÁRIO
const user = {
    name: "Antonio Stanislaw",
    transactions: [

    ],
    balance: 0
}

//declaração de funções
//cria um transação
function createTransaction(type, value) {
    if (type == "credit") {
        var transaction = {
            type1: type,
            value1: value
        }
        user.transactions.push(transaction)
        user.balance = user.balance + transaction.value1

    } else if (type == "debit") {
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

//Verifica qual o maior valor por tipo de transação
function getHigherTrasactionByType(type) {
    // Variável local "MAIOR"
    var larger = 0

    //condição para caso não haja contas do tipo debito/credito
    if((type != "debit") && (type != "credit")){
        console.log(`Type of transaction does not correspond
        to any debit/credit transaction`)
        
    }else{

        for (let i in user.transactions) {
    
            if ((user.transactions[i].type1 == type) && (larger < user.transactions[i].value1)) {
    
                var larger = user.transactions[i].value1
                var aux = user.transactions[i]
    
            }
            
    
        }
        console.log(aux)
    }

}

//Chamando as funções
/* ########## CRÉDITO ########## */
createTransaction("credit", 10)
createTransaction("credit", 290)
createTransaction("credit", 50)
createTransaction("credit", 600)

/* ########### DÉBITO ############*/
createTransaction("debit", 50)
createTransaction("debit", 700)

console.log(`My balance is: R$ ${user.balance.toFixed(2)}`)
getHigherTrasactionByType("debit")