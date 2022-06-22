
const tvaPourcentage  = 0.18; 
function tvaCalculator(){
    let votreMontant = document.getElementById("ht").value;
    let text;
    if(votreMontant  < 0 ){
        text = "veuillez saisir un nombre positif";
    }else{
        let montantTtc = tvaPourcentage * votreMontant;
        text = "Montant :" + montantTtc;
    }
    document.getElementById("demo").innerHTML = text;
}

