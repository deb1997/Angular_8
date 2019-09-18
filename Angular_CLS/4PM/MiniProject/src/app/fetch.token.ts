import { Injectable } from "@angular/core";
@Injectable()
export class fetchToken{
    public getToken():any{
        let str = window.localStorage.getItem("login_details");
        let obj = JSON.parse(str);
        return obj.token;
        
    };
};