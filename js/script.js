console.log("js ok");

/*

 - crea una variabile km
 - chiedi all'utente quanti chilometri vuole percorrere
 - crea una variabile eta
 - chiedi all'utente l'eta
 - crea una variabile prezzochilometro (costante)
 - crea una variabile sconto20 (costante)
 - crea una variabile sconto40 (costante)
 - crea una variabile prezzo-finale
 - crea una condizione:
     se l'eta è minore di 18 anni
         allora calcola il prezzo finale, applica lo sconto del 20% (sconto20)
     altrimenti se l'eta è maggiore di 65 anni
         allora calcola il prezzo finale, applica lo sconto del 40% (sconto40)
    altrimenti
        calcola il prezzo finale standard 
 - e mostra all'utente il prezzo finale
        
*/

const km = document.getElementById("km");
console.log(km);

const eta = document.getElementById("eta");
console.log(eta);

const prezzochilometro = 0.21;
console.log(prezzochilometro);

let prezzofinale = km * prezzochilometro;
console.log(prezzofinale);

const sconto20 = (((prezzofinale) / 100) * 20);
console.log(sconto20);

const sconto40 = (((prezzofinale) / 100) * 40);
console.log(sconto40);


if (eta < 18){
    prezzofinale = prezzofinale - sconto20;

}
else if (eta > 65){
    prezzofinale = prezzofinale - sconto40;

} 

prezzofinale = prezzofinale.toFixed(2);


console.log(prezzofinale);
document.getElementById("risposta").innerHTML = `Il prezzo finale è ${prezzofinale}`;










































// const km = (document.getElementById("km").value);
// console.log(km);


// const eta = (document.getElementById("eta").value);
// console.log(km);


// const prezzochilometro = 0.21;


// let prezzo = km * prezzochilometro;


// let prezzofinale;


// const button = document.getElementById("calculatorbutton");

// button.addEventListener("click", function() {
//     console.log("mi hai cliccato");
    
    
//     if (eta < 18){
//         prezzofinale = prezzo - (prezzo * 0.2);
        
//     }
//     else if (eta > 65){
//         prezzofinale = prezzo - (prezzo * 0.4);
        
//     }      
    
    
//     prezzofinale = prezzofinale.toFixed(2);
    
    
    
// });    


// console.log(prezzofinale);


// document.getElementById("risposta").innerHTML = `Il prezzo finale è ${prezzofinale}`;













