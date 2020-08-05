import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {
  
  view:string = 'APOD';
  
  constructor(private nasa:NasaService) { }
  
  
  ngOnInit(): void {    
  }

}
