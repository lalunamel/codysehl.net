$(function() {
	var zoom = 4;
	var map = L.mapbox.map("mapbox-map", "codysehl.gb7pmghe", {
		zoomControl: false,
		attributionControl: false,
		minZoom: zoom,
	}).setView([41.94321, -98.37514], zoom);
});