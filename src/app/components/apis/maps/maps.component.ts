import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @ViewChild("map", { static: true }) mapElement: ElementRef;
  map: google.maps.Map;
  constructor() { }
  infoWindow = new google.maps.InfoWindow;
  searchInput:string = '';
  handleLocationError(browserHasGeolocation, infoWindow, pos ) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 
      'Error: The Geolocation service failed.': 
      'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(this.map)
  }
  formatAndSubmit(){
    if(this.searchInput&&this.searchInput.length<50){
      
    }
  }

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Location found.');
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);

      }, ()=>{
        this.handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }
  afterViewInit(): void {

  }

}
