// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  let myCoords = new google.maps.LatLng(35.514627, -83.107525)
  function initialize() {
    let mapOptions = {
      center: myCoords,
      zoom: 10,
      scrollwheel: false
    };

    let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    let marker = new google.maps.Marker({
      position: myCoords,
      map: map,
      title: 'Homeish'
    });

    let contentString = '<h2>What is here?</h2> ' + '<p>Zoom in to find out...</p>';

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, "mouseover", function() {
      infowindow.open(map, marker);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});