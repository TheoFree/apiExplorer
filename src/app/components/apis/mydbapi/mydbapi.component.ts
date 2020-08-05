import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from 'src/app/services/config.service';
import { ObspracticeService } from 'src/app/services/obs/obspractice.service';

@Component({
  selector: 'app-mydbapi',
  templateUrl: './mydbapi.component.html',
  styleUrls: ['./mydbapi.component.scss']
})
export class MydbapiComponent implements OnInit {
  constructor(private obsP: ObspracticeService) { }
  public loggedin: boolean = false;
  public userEmail: string = '';
  public userPassword: string = '';
  public result: string = '';
  private token: string = '';
  public display: string = 'allProd';
  public products: object[] = [];
  public ProdName: string = '';
  public ProdBrand: string = '';
  public ProdPrice: number = 0;
  clearResults = () => this.result = '';
  dbRegister = () => {
    this.obsP.dbRegister(this.userEmail, this.userPassword)
      .subscribe(response => {
        this.result = response.body.message;
        if (response.body.message != "Signup successful") {
          this.userEmail, this.userPassword = "";
          this.loggedin = false;
        };

      });

  };
  dbLogin = () => {
    this.obsP.dbLogin(this.userEmail, this.userPassword)
      .subscribe(response => {
        this.result = response.message;
        if (response.message == "Login Successfull") {
          this.loggedin = true;
          this.token = response.body.token
          this.dbProductsGet();
        }
        else {
          this.userEmail, this.userPassword = "";
          this.loggedin = false;
        }

      });


  }
  dbProductsGet = () => {
    this.obsP.dbProductsGetAll(this.token)
      .subscribe(response => {
        this.products = response.body;
      })
  }
  dbProductAdd = () => {
    this.obsP.dbProductsAdd(this.token, this.ProdName, this.ProdBrand, this.ProdPrice)
      .subscribe();
  }
  ngOnInit(): void {
    //  this.obsP.dbRegister("Ted","tester").subscribe();
  }

}
