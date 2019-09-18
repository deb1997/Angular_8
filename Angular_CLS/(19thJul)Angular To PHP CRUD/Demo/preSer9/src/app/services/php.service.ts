import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PHP from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class PhpService {
  constructor(private _http:HttpClient) { }
  public getEmployees():Observable<any>{
      return this._http.get(PHP);
  };
};
