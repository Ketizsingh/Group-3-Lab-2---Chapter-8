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