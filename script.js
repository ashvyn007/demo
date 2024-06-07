function initMap(){
    var options={
        zoom:8,
        center:{lat:28.70405920,lng:77.10249020}
    }
    var map=new google.maps.Map(document.getElementById('map'),options);

    var marker=new google.maps.Marker({
        position:{lat:28.70405920,lng:77.10249020},
        map:map
    });

    var infoWindow=new google.maps.InfoWindow({
        content:'<h3>New Delhi</h3>'
    });

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    });

}