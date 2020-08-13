import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MapsService {
  embedMapURLBase = "https://www.google.com/maps/embed/v1/";
  embedMapKey = "AIzaSyA6qJd5RVirjPILOG-mGbP08sH_uAUw9sQ";
  
  constructor(private http:HttpClient) { }

  getMapPlace(searchquery:string):Observable<any>{
    return this.http.get(
      this.embedMapURLBase+'place',{
      params: new HttpParams()
      .set('key',this.embedMapKey)
      .set('q', searchquery)
      }
    )
  }

}
