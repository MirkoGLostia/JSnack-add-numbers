/*
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti.
 */

// variabili

let counter = 0;

let summ = 0;

const numbers = [];

submit.onclick = function () {

    counter = parseInt(document.getElementById("counter").value) ;

    // pulizia
    if (summ > 0) {
        summ = 0;
        numbers.length = 0;
    }


    // eseguire 5 prompt e salvare i risultati in array

    for (let i = 0; i < counter; i++) {
        
        // chiedo i numeri all'utente
        utNumber = parseInt(prompt((i+1) + " scrivi un numero"));


        // inserisco nell'array
        numbers.push (utNumber);
        

        // debug
        console.log(numbers);
    }


    // prendere i valori da array e sommarli

    for (let i = 0; i < numbers.length; i++) {
        

        summ = summ + numbers[i];


        //debug
        console.log(numbers[i], summ);
        
    }
    
    document.getElementById("somma").innerHTML = summ;
}


