import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/modules/nasa/services/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {
  img;
  description;
  copyright;
  date;
  title;
  view:string = 'APOD';
  NEOFeed;
  NEOLookup;
  NEOBrowse;
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
    this.getAPOD();
      
    
  }

}
