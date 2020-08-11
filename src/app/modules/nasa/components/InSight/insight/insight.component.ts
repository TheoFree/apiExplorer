import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common'
import { NasaService } from '../../../services/nasa.service';
//mport { DxPolarChartModule, DxSelectBoxModule } from 'devextreme-angular';
//import {  } from  'node_modules/devextreme-angular'
@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {

  constructor(private nasa: NasaService) { }
  data;
  collection;
  selectedSol;
  selectedSolNum;
  dataLoaded: boolean = false;
  series = [{ "valueField": "val", "value": "counts per direction" }];
  allDirections = [
    { 'arg': 'N','point':0 ,'val': 1 },
    { 'arg': 'NNE','point':22.5 ,'val': 1 },
    { 'arg': 'NE','point':45 ,'val': 1 },
    { 'arg': 'ENE','point':67.5 ,'val': 1 },
    { 'arg': 'E','point':90 ,'val': 1 },
    { 'arg': 'ESE','point':112.5 ,'val': 1 },
    { 'arg': 'SE','point':135 ,'val': 1 },
    { 'arg': 'SSE','point':157.5 ,'val': 1 },
    { 'arg': 'S','point':180 ,'val': 1 },
    { 'arg': 'SSW','point':202.5 ,'val': 1 },
    { 'arg': 'SW','point':225 ,'val': 1 },
    { 'arg': 'WSW','point':247.5 ,'val': 1 },
    { 'arg': 'W','point':270 ,'val': 1 },
    { 'arg': 'WNW','point':292.5 ,'val': 1 },
    { 'arg': 'NW','point':315 ,'val': 1 },
    { 'arg': 'NNW','point':337.5 ,'val': 1 }
  ]
  getInSight_Basic = () => {
    this.nasa.getInSight()
      .subscribe(response => {
        this.collection = response;
        this.setSol(response.sol_keys[0]);
        this.dataLoaded = true;
      });
  }
  setSol(sol: string) {
    this.selectedSol = this.collection[sol];
    this.selectedSolNum = sol;
    let data = [];
    data = Object.values(this.selectedSol.WD);
    data.pop();
    data=data.map(item => {
      
      return {
        
        "arg": item["compass_point"],
        "point": item['compass_degrees'],
        "val": item['ct']
      }
    }).concat(this.allDirections).sort((a,b)=>{return a.point-b.point});
    
    let temp = []
    let lens = '';
    for(let obj in data){
      if(data[obj].arg !=lens){
        temp.push(data[obj]);
        lens=data[obj].arg;
      }
    };
    this.data = temp;
  }
  ngOnInit(): void {
    this.getInSight_Basic();
  }
  
}
