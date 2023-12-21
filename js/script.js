console.log("JS OK");


const km = prompt('inserisci i chilometri da percorrere', '5');
console.log(km);

const eta = prompt('inserisci la tua eta', '5');
console.log(eta);

const prezzochilometro = 0.21;
console.log(prezzochilometro);

let prezzofinale = km * prezzochilometro;
console.log(prezzofinale);

if (eta < 18){
    prezzofinale = prezzofinale - (((prezzofinale) / 100) * 20);

}
else if (eta > 65){
    prezzofinale = prezzofinale - (((prezzofinale) / 100) * 40);

} 

prezzofinale = prezzofinale.toFixed(2);


console.log(prezzofinale);









// document.getElementById("risposta").innerHTML = `Il prezzo finale è ${prezzofinale}`;


