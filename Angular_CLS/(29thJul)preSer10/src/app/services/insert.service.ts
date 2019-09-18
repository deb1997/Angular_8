import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import DB from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class InsertService {
  constructor(private _http:HttpClient) { }
  public addProduct(obj:any):Observable<any>{
    return this._http.post(DB+"/insert",obj);
  };
};
