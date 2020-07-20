// custom js file

(function () {
// GET request for remote image in node.js
	axios({
		method: 'get',
		url: 'https://api.nasa.gov/planetary/apod?api_key=Bmjq2dNI5gHvRoMGbfMsbEWEZ8L3bveRY2bRT69U&date=2002-02-05',
		responseType: 'stream'
	})
  .then(function (response) {
		console.log(response)

		$('#generate').click(function () {
			document.getElementById('theImage').src = response.data.hdurl
		})
  })
})() // iffe ENDS
