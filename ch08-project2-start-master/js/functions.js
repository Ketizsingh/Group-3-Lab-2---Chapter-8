/* add in your functions here */
function outputCountryBox(name, continent, cities, photos) {
	function outputCities(cityarray) {
		var citieshtml = '';
		for (let index = 0; index < cityarray.length; index++) {
			citieshtml += '<li>' + cityarray[index] + '</li>';
		}
		return citieshtml;
	}