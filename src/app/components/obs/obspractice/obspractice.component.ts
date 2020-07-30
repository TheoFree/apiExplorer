import { Component, OnInit } from '@angular/core';
import { ObspracticeService } from 'src/app/services/obs/obspractice.service';
import { Observable} from'rxjs';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-obspractice',
  templateUrl: './obspractice.component.html',
  styleUrls: ['./obspractice.component.scss']
})
export class ObspracticeComponent implements OnInit {

  constructor(private obpr :ObspracticeService) { }
  output = this.obpr.keys;
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
    
  });
  clearOutput= () => this.output =null;
  ngOnInit(): void {
    
  }

}
