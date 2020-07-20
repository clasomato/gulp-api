// custom js file

(function () {
	$('#generate').click(function () {
		var year = document.getElementById('year').value
		var month = document.getElementById('month').value
		var day = document.getElementById('day').value
// GET request for remote image in node.js
	axios({
		method: 'get',
		url: 'https://api.nasa.gov/planetary/apod?api_key=Bmjq2dNI5gHvRoMGbfMsbEWEZ8L3bveRY2bRT69U&date=' + year + "-" + month + "-" + day,
		responseType: 'stream'
	})
  .then(function (response) {
		console.log(response)

		var image = response.data.hdurl
			document.getElementById('theImage').src = image
			document.getElementById('imageTitle').innerHTML = response.data.title;
		})
  })
})() // iffe ENDS
