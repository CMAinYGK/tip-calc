function tipCalc() {
	let cost = document.getElementById("input-cost").value;
	let split = document.getElementById("billSplit").value;
	let service = document.querySelector('input[name="service"]:checked').value;
	let tipValue = [
		1.10,
		1.15,
		1.18,
		1.20,
		1.25
	];

	let totalBill = (cost * tipValue[service]).toFixed(2);
	let totalTip = (totalBill - cost).toFixed(2);
	let shareTip = (totalBill / split).toFixed(2);
	let shareNoTip = (cost / split).toFixed(2);
	let tipShare = ((totalBill - cost) / split).toFixed(2);

	document.getElementById("output").innerHTML = "Based on your input, you should tip $"+totalTip+", bringing your total bill to $"+totalBill+"."

	if (service > 0) {
		document.getElementById("share").innerHTML = "Each person's share of the bill is $"+shareTip+" --- $"+shareNoTip+" for the bill, and $"+tipShare+" for the tip."
	}
};
