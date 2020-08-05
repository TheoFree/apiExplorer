import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { NasaComponent } from './nasa.component';
import { ApodComponent } from './components/APOD/apod/apod.component';
import { NeoComponent } from './components/NEO/neo/neo.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [NasaComponent, ApodComponent, NeoComponent],
  imports: [
    CommonModule,
    NasaRoutingModule,
    FormsModule
  ]
})
export class NasaModule { }
