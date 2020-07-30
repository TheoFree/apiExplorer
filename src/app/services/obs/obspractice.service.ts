import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClientModule as http} from '@angular/common/http';
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



  constructor() {

  }
}
