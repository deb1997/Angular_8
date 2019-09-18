import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MINIPROJECT from 'src/app/config/urls/urls';
@Injectable()
export class logoutService{
    constructor(private _http:HttpClient){}
    public logout():Observable<any>{
        return this._http.get(MINIPROJECT+"/logout");
    };
};