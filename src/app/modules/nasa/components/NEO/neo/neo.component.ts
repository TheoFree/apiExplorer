import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../../services/nasa.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.scss']
})
export class NeoComponent implements OnInit {
  NEOId: number;
  NEOAstroidData;
  NEOFeedData;
  NEOFeedDay = 0;
  StreamStart;
  StreamEnd;
  units = {
  SizeUnitSel : 'kilometers',
  VelocityUnitSel : 'kilometers_per_second',
  MissUnitSel : 'kilometers',
  }
  NEOFeedShow;
  NEOAstroidShow;
  NEOBrowseShow;
  NEOBrowseData;
  constructor(private nasa: NasaService) { }
  getNeoFeed() {
    if (this.StreamStart && this.StreamEnd) {
      this.nasa.getNEO_Feed(this.StreamStart, this.StreamEnd)
        .subscribe(response => {
          let data = [];
          for (let astroids of Object.values(response.near_earth_objects)) {
            data.push(astroids)
          };
          this.NEOFeedData = data;
          this.NEOBrowseShow = false;
          this.NEOAstroidShow = false;
          this.NEOFeedShow = true;
        })
    }
    else if (this.StreamStart) {
      this.nasa.getNEO_Feed(this.StreamStart)
        .subscribe(response => {
          // let keys = Object.keys(response.near_earth_objects);
          let data = [];
          for (let astroids of Object.values(response.near_earth_objects)) {
            data.push(astroids)
          };
          this.NEOFeedData = data;
          this.NEOBrowseShow = false;
          this.NEOAstroidShow = false;
          this.NEOFeedShow = true;
        })
    }

  }
  getNeoObject(id?:number,astroid_link?) {
    if (id) {
      this.nasa.getNEO_Asteroid(id)
        .subscribe(response => {
          this.NEOAstroidData = response;
          this.NEOFeedShow = false;
          this.NEOBrowseShow = false;
          this.NEOAstroidShow = true;
        });
    }
    if(astroid_link){
      this.nasa.getNEO_Asteroid(undefined,astroid_link)
        .subscribe(response => {
          this.NEOAstroidData = response;
          this.NEOFeedShow = false;
          this.NEOBrowseShow = false;
          this.NEOAstroidShow = true;
        });
    }

    if (this.NEOId) {
      this.nasa.getNEO_Asteroid(this.NEOId)
        .subscribe(response => {
          this.NEOAstroidData = response;
          this.NEOFeedShow = false;
          this.NEOBrowseShow = false;
          this.NEOAstroidShow = true;
        });
    }
  }
  getNeoBrowse(traversal?:string) {
    if(traversal){
      this.nasa.getNeo_List(traversal)
      .subscribe(response => {
        this.NEOBrowseData = response
        this.NEOFeedShow = false;
        this.NEOAstroidShow = false;
        this.NEOBrowseShow = true;
        
      });
    }
    if(this.NEOBrowseData){
      this.goToBrowse()
    }
    else{
    this.nasa.getNeo_List()
      .subscribe(response => {
        this.NEOBrowseData = response
        this.NEOFeedShow = false;
        this.NEOAstroidShow = false;
        this.NEOBrowseShow = true;
        
      });
    }
    
  }
  
  SizeUnits = (selected: string) => this.units.SizeUnitSel = selected;
  VelocityUnits = (selected: string) => this.units.VelocityUnitSel = selected;
  MissUnits = (unit) => this.units.MissUnitSel = unit;
  close = () => this.NEOFeedDay = -1;
  goToFeed = () =>{
    this.NEOAstroidShow = false;
    this.NEOBrowseShow = false;
    this.NEOFeedShow = true;
  }
  goToBrowse = () =>{
    this.NEOAstroidShow = false;
    this.NEOFeedShow = false;
    this.NEOBrowseShow = true;
  }
  ngOnInit(): void {
    // this.getNeoObject(2021277);
  }
  ngOnDestory():void{

  }

}
