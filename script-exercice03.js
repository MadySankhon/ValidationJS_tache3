let tauxRadio = document.querySelectorAll('input[type = "radio"]');
let TauxRadio = document.getElementById('btnRatio');
let prixSelect = document.querySelector('select');
let PrixHt = document.getElementById('prix');
// let prixProduit = null;

TauxRadio.addEventListener('change', function rValTaux(){
        for (let i = 0; i < tauxRadio.length; i++) {
            if (tauxRadio[i].checked){

                // console.log(tauxRadio[i].value);
                return tauxRadio[i].value;
            }
        }
})
// let valTaux = rValTaux;
// console.log(rValTaux());

prixSelect.addEventListener('change', function rPrixUnitaire() {
    PrixHt.value = this.value;
    var prixProduit = Number(PrixHt.value);
    // console.log(prixProduit);
    return prixProduit;
})

// let valPrixProduit = valPrixUnitaire();
rPrixUnitaire();
alert(prixProduit);

// var qt = document.getElementById('quantite');
// var ph = document.getElementById('prix');
// var montant = document.getElementById('montant')

//  function calculer(qt, ph, montant) {
//     ph.value = this.value;
//     montant = Number(qt.value * ph.value);
//     return (montant);

//  }
//   console.log(calculer);



