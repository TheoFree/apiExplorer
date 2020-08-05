import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/apis/maps/maps.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

import { HttpClientModule} from '@angular/common/http';
import { MydbapiComponent } from './components/apis/mydbapi/mydbapi.component';
import { ObspracticeComponent } from './components/obs/obspractice/obspractice.component';
import { NasaComponent } from './components/apis/nasa/nasa.component'
@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomeComponent,
    NavComponent,
    MydbapiComponent,
    ObspracticeComponent,
    NasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
