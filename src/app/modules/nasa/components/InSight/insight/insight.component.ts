import { Component, OnInit } from '@angular/core';
import { keyvalue } from '@angular/common'
import { NasaService } from '../../../services/nasa.service';
import { DxPolarChartModule, DxSelectBoxModule } from 'devextreme-angular';
//import {  } from  'node_modules/devextreme-angular'
@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {

  constructor(private nasa:NasaService) { }
  private data;
  collection;
  selectedSol;
  selectedSolNum;
  dataLoaded:boolean = false;
  getInSight_Basic=()=>{
    this.nasa.getInSight()
     .subscribe(response=>{
      this.collection = response;
      this.setSol(response.sol_keys[0]);
      this.dataLoaded = true;
     });
  }
  setSol(sol:string){
    this.selectedSol = this.collection[sol];
    this.selectedSolNum = sol;
    this.data = Object.entries(this.selectedSol.WD);
    this.data = this.data.map(item=> [item[1]['compass_point'],item[1]['ct']]);
    
   // console.log(`selected sol changed to ${this.selectedSol}`);
  }
  helloWorld() {
    alert('Hello world!');
}
  ngOnInit(): void {
    this.getInSight_Basic();
  }
  ngAfterViewInit(): void{
    
  }

}
