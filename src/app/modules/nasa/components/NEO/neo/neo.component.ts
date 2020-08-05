import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../../nasa.service';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.scss']
})
export class NeoComponent implements OnInit {
  NEOFeed;
  NEOLookup;
  NEOBrowse;
  constructor(nasa:NasaService) { }

  ngOnInit(): void {
  }

}
