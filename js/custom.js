// custom js file

(function(){

	function makeAjaxRequest () {
		// GET request for remote image in node.js
		axios({
		  method: 'get',
		  url: 'https://api.nasa.gov/planetary/apod?api_key=0a2OMkeeTLcnN7bPTfoDNdRcGHHTesp4JH88fl13',
		  responseType: 'stream'
		}).then(function (response) {
		   $('#generate').click(function(){
		   	applyImage(response.data)
		   });
		});
	}

	makeAjaxRequest()

	function applyImage (data) {
		console.log(data)
		$('#theImage').attr('src', data.hdurl);
	}

})(); // iffe ENDS