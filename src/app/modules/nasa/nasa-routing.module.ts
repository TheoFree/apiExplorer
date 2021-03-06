import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasaComponent } from './nasa.component';
import { ApodComponent } from './components/APOD/apod/apod.component';
import { NeoComponent } from './components/NEO/neo/neo.component';
import { InsightComponent } from './components/InSight/insight/insight.component';

const routes: Routes = [
  {
    path: '',
    component: NasaComponent
  },
  {
    path: 'APOD',
    component: ApodComponent
  },
  {
    path: 'NEO',
    component: NeoComponent
  },
  {
    path: 'InSight',
    component: InsightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoutingModule { }
