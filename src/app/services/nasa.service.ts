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
  getNEO_Feed(start_date: string, end_date?: string, astroid_id?:number): Observable<any> {
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
    if (astroid_id){
      return this.http.get('https://api.nasa.gov/neo/rest/v1/neo', {
        params: new HttpParams()
          .set('asteroid_id', astroid_id.toString())
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
  constructor(private http: HttpClient) { }
}