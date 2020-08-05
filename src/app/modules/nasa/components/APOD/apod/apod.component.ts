import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../../nasa.service';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  img;
  description;
  copyright;
  date;
  title;
  view:string = 'APOD';
  constructor(private nasa:NasaService) { }
  getAPOD=()=>{this.nasa.getAPOD()
    .subscribe(response=>{
      this.title = response.title;
      this.date = response.date;
      this.copyright = response.copyright;
      this.img = response.hdurl;
      this.description = response.explanation;
    })}
  ngOnInit(): void {
  }

}
