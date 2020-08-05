import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/apis/maps/maps.component';
import { MydbapiComponent } from './components/apis/mydbapi/mydbapi.component';
import { NasaComponent } from './components/apis/nasa/nasa.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'mydbapi',
    component:MydbapiComponent
  },
  {
    path:'maps',
    component:MapsComponent
  },
  { path: 'nasa', loadChildren: () => import('./modules/nasa/nasa.module').then(m => m.NasaModule) },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
