import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../../services/nasa.service';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.scss']
})
export class NeoComponent implements OnInit {
  NEOFeed;
  NEOLookup;
  NEOId: number;
  NEOAstroidData;
  NEOBrowse;
  NEOFeedData;
  NEOFeedDay = -1;
  StreamStart;
  StreamEnd;
  SizeUnitSel='kilometers';
  VelocityUnitSel='kilometers_per_second'
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
          this.NEOAstroidData = undefined;
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
          this.NEOAstroidData = undefined;
        })
    }

  }
  getNeoObject() {
    if (this.NEOId) {
      this.nasa.getNEO_Asteroid(this.NEOId)
        .subscribe(response => {
          this.NEOAstroidData = response;
          this.NEOFeedData = undefined;
        });
    }
  }
  getNeoBrowse() {
    this.nasa.getNEO_Feed()
      .subscribe(response => {
        console.log("called someone")
      })
  }
  SizeUnits = (selected: string) => this.SizeUnitSel = selected;
  VelocityUnits = (selected: string) => this.VelocityUnitSel = selected;
  
  ngOnInit(): void {
    // this.getNeoFeed();
  }

}
