import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @ViewChild("map",{static:true}) mapElement: ElementRef;
  map: google.maps.Map;
  constructor() { }

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
  afterViewInit():void{

  }

}
