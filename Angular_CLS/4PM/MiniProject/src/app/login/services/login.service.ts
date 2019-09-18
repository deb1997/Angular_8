import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MINIPROJECT from 'src/app/config/urls/urls';
@Injectable()
export class loginService{
    constructor(private _http:HttpClient){}
    public authenticate(obj:any):Observable<any>{
        return this._http.post(MINIPROJECT+"/login",obj);
    };
};