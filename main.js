$(document).ready(function() {
	init();
});

function plotData(map, data) {
	for (var i = 0; i < data.length; i++) {
		var group = data[i]
		for (var j = 0; j < group.length; j++) {
			console.log(group[j])
			if (group[j] && group[j].lat && group[j].lon) {
				console.log([group[j].lat, group[j].lon])
				var marker = L.marker([group[j].lat, group[j].lon]).addTo(map);
			}
		};
	};
}

function init() {
	var map = L.map('map', {
	    center: [51.505, -0.09],
	    zoom: 13
	});
	map.setView([51.505, -0.09], 13);
	console.log('running')

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
	{
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'tomchambers.mo652b6b',
	    accessToken: 'pk.eyJ1IjoidG9tY2hhbWJlcnMiLCJhIjoiQjF2SVJNRSJ9.NvEIfaesrF1i5oRtDJCKxA'
	}).addTo(map);



	$.get('./processedData.json', function(err, res, body) {
		var data = body.responseJSON;
		console.log(data)
		var marker = L.marker([51.5, -0.09]).addTo(map);
		plotData(map, data);
	})
}