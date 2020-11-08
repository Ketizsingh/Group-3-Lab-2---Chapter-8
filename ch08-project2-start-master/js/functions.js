/* add in your functions here */
function outputCountryBox(name, continent, cities, photos) {
	function outputCities(cityarray) {
		var citieshtml = '';
		for (let index = 0; index < cityarray.length; index++) {
			citieshtml += '<li>' + cityarray[index] + '</li>';
		}
		return citieshtml;
        }
		function outputPhotos(photosarray) {
			var photoshtml = '';
			for (let index = 0; index < photosarray.length; index++) {

				photoshtml += '<img src="images/' + photosarray[index] + '" class="photo">';
			}
			return photoshtml;
		}
	}

for (let index = 0; index < countries.length; index++) {
	const name = countries[index].name;
	const continent = countries[index].continent;
	const cities = countries[index].cities;
	const photos = countries[index].photos;

	outputCountryBox(name, continent, cities, photos);

}
	