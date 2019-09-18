import { Component } from "@angular/core";
import { logoutService } from '../services/logout.service';
import { Router } from '@angular/router';
import errCallBack from 'src/app/config/error/errCallBack';
@Component({
    selector:"dashboard",
    templateUrl:"./dashboard.component.html"
})
export class dashboardComponent{
    constructor(private _service:logoutService,
                private _router:Router){}
    public logout():any{
        this._service.logout().subscribe((posRes)=>{
            if(posRes.logout == "success"){
                window.localStorage.removeItem("login_details");
                this._router.navigate(["/"]);
            }
        },errCallBack);
    };
};