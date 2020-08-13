import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {


  constructor() { }
  infoWindow = new google.maps.InfoWindow;
  
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    //infoWindow.open(map)
  }
  private map: google.maps.Map;
  private searchBar: google.maps.places.SearchBox;
  @ViewChild("map", { static: true }) mapElement: ElementRef;
  

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: "roadmap"
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Location found.');
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);
      }, () => {
        this.handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }

  ngAfterViewInit(): void {
    var input = document.getElementById('search') as HTMLInputElement;
    this.searchBar = new google.maps.places.SearchBox(input);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    this.map.addListener("bounds_changed", () => {
      this.searchBar.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
    })
    let markers: google.maps.Marker[] = [];
    this.searchBar.addListener("places_changed", () => {
      const places = this.searchBar.getPlaces();
      if (places.length == 0) return;
      markers.forEach(marker => {
        marker.setMap(null);
      });
      markers = [];
      const bounds = new google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
        var map = this.map
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location
          })
        );
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location)
        }
      });
      this.map.fitBounds(bounds);
    });
  }
}