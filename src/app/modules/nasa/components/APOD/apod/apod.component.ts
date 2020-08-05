import { Component, OnInit, SecurityContext } from '@angular/core';
import { NasaService } from '../../../services/nasa.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'
@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  img = undefined;
  description;
  copyright;
  date;
  title;
  vidURL = undefined;
  view: string = 'APOD';
  constructor(private nasa: NasaService, private sanitizer: DomSanitizer) { }
  getAPOD = () => {
    this.nasa.getAPOD()
    .subscribe(response => {
      this.title = response.title;
      this.date = response.date;
      this.copyright = response.copyright;
      if (response.hdurl) this.img = response.hdurl;
      else if (response.url) {
        const sanitized_url:SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
        this.vidURL = sanitized_url; 
        // this.sanitizer.sanitize(SecurityContext.URL, response.url);

      }
      this.description = response.explanation;
    })
  }
  ngOnInit(): void {
    this.getAPOD();
  }

}
