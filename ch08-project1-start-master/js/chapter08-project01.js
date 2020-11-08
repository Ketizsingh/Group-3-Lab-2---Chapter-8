/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

let substotal = 0;

for (let index = 0; index < filenames.length; index++) {

   const file = filenames[index];
   const title = titles[index];
   const quantity = quantities[index];
   const price = prices[index];
   const total = calculateTotal(quantity, price);

   document.write(outputCartRow(file, title, quantity, price.toFixed(2), total.toFixed(2)));

   substotal = substotal + total;


}

var shipping = shippingCalculate(substotal);
var tax = taxCalculate(substotal);
var grandTotal = totalCalculate(substotal, shipping, tax);

var display = {
   subtotal: substotal.toFixed(2),
   tax: tax,
   shipping: shipping,
   grandTotal: grandTotal.toFixed(2)
}


function fillvalues() {
	document.getElementsByClassName('subtotal')[0].innerHTML = '$' + display.subtotal;
	document.getElementsByClassName('tax')[0].innerHTML = '$' + display.tax;
	document.getElementsByClassName('shipping')[0].innerHTML = '$' + display.shipping;
	document.getElementsByClassName('grandtotal')[0].innerHTML = '$' + display.grandTotal;
}