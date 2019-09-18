import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MINIPROJECT from 'src/app/config/urls/urls';
@Injectable()
export class contactService{
    constructor(private _http:HttpClient){}
    public getContactModuleData():Observable<any>{
        return this._http.get(MINIPROJECT+"/contact");
    };
};