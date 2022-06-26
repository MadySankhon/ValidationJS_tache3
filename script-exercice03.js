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
	const amountValue = quantityValue * priceValue;
	const totalValue = amountValue + amountValue * parseFloat(rateValue);
	amount.value = amountValue;
	total.value = totalValue;
	console.log(amountValue);
	console.log(totalValue);
});
