/* add in your functions here */
function outputCountryBox(name, continent, cities, photos) {
    
    
    function outputCities(cityarray) {
		var citieshtml = '';
		for (let index = 0; index < cityarray.length; index++) {
			citieshtml += '<li>' + cityarray[index] + '</li>';
		}
		return citieshtml;

		function outputPhotos(photosarray) {
			var photoshtml = '';
			for (let index = 0; index < photosarray.length; index++) {

				photoshtml += '<img src="images/' + photosarray[index] + '" class="photo">';
			}
			return photoshtml;
        }
        
        document.write('<div class="item"><h2>' + name + '</h2><p>' + continent + '</p><div class="inner-box"><h3>Cities</h3><ul>' + outputCities(cities) + '</ul></div><div class="inner-box"><h3>Popular Photos</h3>' + outputPhotos(photos) + '</div><button>Visit</button></div>');

        
	}


	for (let index = 0; index < countries.length; index++) {
	const name = countries[index].name;
	const continent = countries[index].continent;
	const cities = countries[index].cities;
	const photos = countries[index].photos;

	outputCountryBox(name, continent, cities, photos);

}