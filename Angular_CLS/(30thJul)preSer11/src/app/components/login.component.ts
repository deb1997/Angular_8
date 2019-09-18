import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  private result:any;
  constructor(private _service:LoginService) { }
  ngOnInit() {
  }
  public login(obj:any):any{
    this._service.authenticate(obj).subscribe((posRes)=>{
        this.result = posRes;
    },(err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("client side error");
        }else{
          console.log("server side error");
        }
    });
  };
};
