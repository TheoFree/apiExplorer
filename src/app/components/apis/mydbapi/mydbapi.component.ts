import { Component, OnInit } from '@angular/core';
import { Config,ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-mydbapi',
  templateUrl: './mydbapi.component.html',
  styleUrls: ['./mydbapi.component.scss']
})
export class MydbapiComponent implements OnInit {


  
  constructor(private configService: ConfigService) { }
  config: Config;  
  headers;

  showConfig(){
    this.configService.getConfig().subscribe((data: Config) => this.config = {
      heroesUrl: (data as any).heroesUrl,
      textfile: (data as any).textfile,
    });

  }
  showConfigResponse(){
    this.configService.getConfigResponse()
    .subscribe(resp =>{
      const keys = resp.headers.keys();
      this.headers = keys.map(key=>`${key}:${resp.headers.get(key)}`);
      this.config = {...resp.body};
    })
  }
  ngOnInit(): void {
       
  }

}
