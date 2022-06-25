const btnCalculate = document.getElementById("Btn");
btnCalculate.addEventListener("click", (e) => {
	e.preventDefault();
	const radiosbtn = document.getElementsByName("tauxRadio");
	let rateValue;
	const quantityValue = document.getElementById("quantite").value;
	const priceValue = document.getElementById("prix").value;
	const amount = document.getElementById("montant");
	const total = document.getElementById("totalTTC");

	for (let i = 0; i < radiosbtn.length; i++) {
		if (radiosbtn[i].checked) {
			rateValue = radiosbtn[i].value;
		}
	}
	// console.log(quantityValue);
	// console.log(priceValue);
	// console.log(parseFloat(rateValue));
	const amountValue = quantityValue * priceValue;
	const totalValue = amountValue + amountValue * parseFloat(rateValue);
	amount.value = amountValue;
	total.value = totalValue;
	console.log(amountValue);
	console.log(totalValue);
});
// let TauxRadio = document.getElementById("btnRatio");
// let prixSelect = document.querySelector("select");
// let PrixHt = document.getElementById("prix");
// let prixProduit = null;

// TauxRadio.addEventListener("change", function rValTaux() {
// 	for (let i = 0; i < tauxRadio.length; i++) {
// 		if (tauxRadio[i].checked) {
// 			// console.log(tauxRadio[i].value);
// 			return tauxRadio[i].value;
// 		}
// 	}
// });
// // let valTaux = rValTaux;
// // console.log(rValTaux());

// prixSelect.addEventListener("change", function rPrixUnitaire() {
// 	PrixHt.value = this.value;
// 	var prixProduit = Number(PrixHt.value);
// 	// console.log(prixProduit);
// 	return prixProduit;
// });

// let valPrixProduit = valPrixUnitaire();
// rPrixUnitaire();
// alert(prixProduit);

// var qt = document.getElementById('quantite');
// var ph = document.getElementById('prix');
// var montant = document.getElementById('montant')

//  function calculer(qt, ph, montant) {
//     ph.value = this.value;
//     montant = Number(qt.value * ph.value);
//     return (montant);

//  }
//   console.log(calculer);
