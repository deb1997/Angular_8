import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import DB from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private _http:HttpClient) { }
  public getProducts():Observable<any>{
    return this._http.get(DB+"/fetch");
  };
};
