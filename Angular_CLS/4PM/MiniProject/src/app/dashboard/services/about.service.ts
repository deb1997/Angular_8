import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MINIPROJECT from 'src/app/config/urls/urls';
@Injectable()
export class aboutService{
    constructor(private _http:HttpClient){}
    public getAboutModuleData():Observable<any>{
        return this._http.get(MINIPROJECT+"/about");
    };
};