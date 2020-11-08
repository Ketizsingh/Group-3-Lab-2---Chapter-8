/* define functions here */

function calculateTotal(quantity, price) {
	return quantity * price;
}

function outputCartRow(file, title, quantity, price, total) {
	return '<tr><td><img src="images/' + file + '"></td><td>' + title + '</td><td>' + quantity + '</td><td>$' + price + '</td><td>$' + total + '</td></tr>';
}


function totalCalculate(substotal, shipping, tax) {
	return Number(substotal) + Number(shipping) + Number(tax);
}

function shippingCalculate(substotal) // calculating shipping cost using if/else statement
{
	if (substotal < 1000) {
		var shipping = '40.00';
	} else {
		var shipping = '0.00';
	}
	return shipping;
}

function taxCalculate(substotal) // calculating tax cost using arthimatic operations
{
	return ((10 / 100) * substotal).toFixed(2);
}

