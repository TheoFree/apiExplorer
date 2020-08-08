import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NasaService {
  getAPOD(): Observable<any> {
    return this.http.get('https://api.nasa.gov/planetary/apod?', {
      params: new HttpParams()
        .set('hd', 'true')
        .set('api_key', 'MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4')
    })
  }
  getNEO_Feed(start_date?: string, end_date?: string): Observable<any> {
    if (end_date && start_date) {
      return this.http.get('https://api.nasa.gov/neo/rest/v1/feed', {
        params: new HttpParams()
          .set('start_date', start_date)
          .set('end_date', end_date)
          .set('api_key', 'MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4')
      })
    }
    if (start_date && !end_date){
      return this.http.get('https://api.nasa.gov/neo/rest/v1/feed', {
        params: new HttpParams()
          .set('start_date', start_date)
          .set('api_key', 'MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4')
      })
    }   
    else{
      return this.http.get('https://api.nasa.gov/neo/rest/v1/browse', {
        params: new HttpParams()
          .set('api_key', 'MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4')
      })
    }
  }
  getNEO_Asteroid(astroid_id?:number, astroid_Link?:string):Observable<any>{
    return ((astroid_Link) ? this.http.get(astroid_Link) : this.http.get('https://api.nasa.gov/neo/rest/v1/neo/'+ astroid_id.toString(), {
      params: new HttpParams()
        .set('api_key', 'MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4')
    }))
  }
  getNeo_List(traversal?:string):Observable<any>{
    return ((traversal) ? this.http.get(traversal) 
    :this.http.get('https://api.nasa.gov/neo/rest/v1/neo/browse/?size=10&api_key=MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4'));
  }
  getInSight():Observable<any>{
    return this.http.get('https://api.nasa.gov/insight_weather/',{
      params: new HttpParams()
       .set('api_key', 'MYWe0Bg89zVn5pmrUh7GY0Vfav9zG6XB2NeGf5A4')
       .set('feedtype','json')
       .set('ver','1.0')
    })
  }
  constructor(private http: HttpClient) { }
}
