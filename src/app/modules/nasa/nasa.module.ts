import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { NasaComponent } from './nasa.component';
import { ApodComponent } from './components/APOD/apod/apod.component';
import { NeoComponent } from './components/NEO/neo/neo.component';
import { FormsModule } from '@angular/forms';
import { InsightComponent } from './components/InSight/insight/insight.component'

@NgModule({
  declarations: [NasaComponent, ApodComponent, NeoComponent, InsightComponent],
  imports: [
    CommonModule,
    NasaRoutingModule,
    FormsModule
  ]
})
export class NasaModule { }
