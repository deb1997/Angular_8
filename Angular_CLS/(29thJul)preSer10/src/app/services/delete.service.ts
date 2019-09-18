import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import DB from '../urls/urls';
@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(private _http:HttpClient) { }
  public deleteProduct(obj:any):Observable<any>{
      return this._http.post(DB+"/delete",obj);
  };
};
