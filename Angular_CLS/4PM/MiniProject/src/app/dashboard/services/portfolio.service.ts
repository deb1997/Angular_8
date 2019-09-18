import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MINIPROJECT from 'src/app/config/urls/urls';
@Injectable()
export class portfolioService{
    constructor(private _http:HttpClient){}
    public getPortfolioModuleData():Observable<any>{
        return this._http.get(MINIPROJECT+"/portfolio");
    };
};