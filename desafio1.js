//USUÁRIO
const user = {
    name: "Antonio Stanislaw",
    transactions: [

    ],
    balance: 0
}

/* ##############################################################
declaração de funções
################################################################# */

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

//Media das transações independe do seu tipo
function getAverageTransactionValue(){
    var media = 0
    var soma = 0
    for (let i in user.transactions){
        soma += user.transactions[i].value1
    }
    media = soma/user.transactions.length
    console.log(`A média das transações realizadas pelo usuário
    ${user.name} é R$ ${media.toFixed(2)}`)
}

//Conta o numero de transações realizadas de acordo com o seu tipo
function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0
    }
    for (let i in user.transactions){
        if (user.transactions[i].type1 == "credit"){
            count.credit++
        }
        if (user.transactions[i].type1 == "debit"){
            count.debit++
        }
    }

    console.log(count)

}
/* #################################################################
Chamando as funções 
####################################################################*/

/* ########## CRÉDITO ########## */

createTransaction("credit", 10)
createTransaction("credit", 290)
createTransaction("credit", 50)
createTransaction("credit", 600)
createTransaction("credit", 690)
createTransaction("credit", 900)


/* ############################## */

/* ########### DÉBITO ############*/

createTransaction("debit", 50)
createTransaction("debit", 700)
createTransaction("debit", 1100)

/* ############################### */

console.log(`My balance is: R$ ${user.balance.toFixed(2)}`)
getHigherTrasactionByType("credit")
getAverageTransactionValue()
getTransactionsCount()