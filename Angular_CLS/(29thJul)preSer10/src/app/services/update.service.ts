import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DB from '../urls/urls';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private _http:HttpClient) { }
  public updateProduct(obj:any):Observable<any>{
    return this._http.post(DB+"/update",obj);
  };
};
