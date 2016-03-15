function initMap() {
  var myLatLng = {lat: 12.864037299999999, lng: 77.59926270000002};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: myLatLng,
    zoom: 12
  });

  // var marker = new google.maps.Marker({
  //   position: myLatLng,
  //   icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
  //   map: map,
  //   title: 'Hello World!'
  // });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({
        position: pos,
        icon: 'http://labs.google.com/ridefinder/images/mm_20_yellow.png',
        //icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
        map: map,
        title: 'Hello World!',
        draggable:true
      });

     google.maps.event.addListener(marker, 'click', function (event) {
      //alert("click"+event.latLng.lat());
    document.getElementById("latbox").innerHTML=event.latLng.lat();
    document.getElementById("lngbox").innerHTML=event.latLng.lng();
    });

     google.maps.event.addListener(marker, 'dragend', function (event) {
       //alert("dragend"+event.latLng.lat());
    document.getElementById("latbox").innerHTML = event.latLng.lat();
    document.getElementById("lngbox").innerHTML = event.latLng.lng();
    });   

    var temp_json = [
{
id: 2,
title: "Munchers",
latitude: 12.9001,
longitude: 77.6276,
approved: true
},
{
id: 3,
title: "Shake Up",
latitude: 12.8948,
longitude: 77.6266,
approved: false
},
{
id: 5,
title: "Chai Point",
latitude: 12.8928,
longitude: 77.6266,
approved: true
},
{
id: 6,
title: "Cerealize",
latitude: 12.8915,
longitude: 77.6252,
approved: true
}
]

      var length = temp_json.length;
      console.log(length);
      for (var i = 0 ; i <= length; i++) 
      {
        var lat = parseFloat(temp_json[i].latitude);
        var lng = parseFloat(temp_json[i].longitude);
        //var tempp = lat+'hdhd'+lng;
        //alert(tempp);

        var loc = {lat: lat, lng: lng};

        //marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                
        var marker = new google.maps.Marker({
        position: loc,
        icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png',
        //icon: 'https://cdn3.iconfinder.com/data/icons/map-markers-1/512/monument-48.png',
        map: map,
        title: 'Hello World!'
      });

    }
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
