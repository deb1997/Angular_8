import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import URLS from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private _http:HttpClient) { }
  public getCustomers():Observable<any>{
      return this._http.get(URLS.CUSTOMERS);
  };
};
