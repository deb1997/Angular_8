import { Component } from "@angular/core";
import { loginService } from '../services/login.service';
import errCallBack from 'src/app/config/error/errCallBack';
import { Router } from '@angular/router';
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
export class loginComponent{
    constructor(private _service:loginService,
                private _router:Router){}
    public login(obj:any):any{
        this._service.authenticate(obj).subscribe((posRes)=>{
            if(posRes.login == "success"){
                let str = JSON.stringify(posRes);
                window.localStorage.setItem("login_details",str);
                this._router.navigate(["/dashboard"]);
            }else{
                alert("Login Fail");
            }
        },errCallBack);
    };
};