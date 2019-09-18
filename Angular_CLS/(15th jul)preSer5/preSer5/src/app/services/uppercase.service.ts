import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UPPERCASE from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class UppercaseService {
  constructor(private _http:HttpClient) { }
  public convertToUpperCase(data:any):Observable<any>{
    return this._http.post(UPPERCASE,data);
  };
};
