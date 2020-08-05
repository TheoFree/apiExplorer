import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ObspracticeService {
  keys = new Observable<string>(observer => {
    console.log(observer.next('NotWorking?'));
    observer.next('Working Yet?');

    observer.complete();
  }
  )
  dbUserURL = "http://localhost:3002/api/v1/user/";
  dbProductURL = "http://localhost:3002/api/v1/product";
  dbRegister(email: string, password: string): Observable<any> {
    return this.http.post(this.dbUserURL + "signup", {
      "email": email,
      "password": password
    })
  };
  dbLogin(email: string, password: string): Observable<any> {
    return this.http.post(this.dbUserURL + 'login', {
      "email": email,
      "password": password
    })
  };
  dbProductsGetAll(token: string): Observable<any> {
    return this.http.get(this.dbProductURL, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
  };
  dbProductsAdd(token: string, name: string, brand: string, price: number): Observable<any> {
    return this.http.post(this.dbProductURL,{
      "name":name,
      "brand":brand,
      "price":price
    }, {
      headers: {
        "Authorization": "Bearer " + token
      } 
    })
  }
  constructor(private http: HttpClient) { }

}
