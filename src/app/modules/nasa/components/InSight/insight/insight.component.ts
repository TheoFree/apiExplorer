import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../../services/nasa.service';
import {  } from  'node_modules/devextreme-angular'
@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {

  constructor(private nasa:NasaService) { }
  getInSight_Basic=()=>{
    this.nasa.getInSight().subscribe();
  }
  ngOnInit(): void {
    this.getInSight_Basic();
  }

}
