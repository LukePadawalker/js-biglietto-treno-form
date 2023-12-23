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

//Form elements
const nameField = document.getElementById("name");

const kmsField = document.getElementById("kms");

const ageField = document.getElementById("age");

//buttons
const confirmButton = document.getElementById("confirm-button");
const resetButton = document.getElementById("reset-button");


// ticket elements

const ticketSection = document.getElementById("ticket-section");
const passengerElement = document.getElementById("passenger-name");
const rateElement = document.getElementById("rate");
const carElement = document.getElementById("car");
const pnrElement = document.getElementById("pnr");
const priceElement= document.getElementById("price");

// initial variables

const pricekms = 0.21;

let rateName = "Tariffa Standard";


//event listner
confirmButton.addEventListener('click', function(){

    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value.trim();

    console.log(nameValue, kmsValue, ageValue);

    let price = pricekms * kmsValue;

    if (ageValue === 'under-18'){
        rateName = "Tariffa Under 18";
        price = price * 0.8;

    }else if (ageValue === "over-65"){
        rateName = "Tariffa Over 65";
        price = price * 0.6;
    }

    //  random number for carriage
    const carriage = Math.floor(Math.random() * 8) + 1;
    console.log(carriage);

    // random prn number
    const pnr = Math.floor(Math.random() * (100000 - 10000)) + 10000;
    console.log(pnr);


    // put the data in the ticket

    passengerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    carElement.innerText = carriage;
    pnrElement.innerText = pnr;
    priceElement.innerText = "$" + price;


    // show the ticket

    ticketSection.classList.remove('d-none');






})










































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













