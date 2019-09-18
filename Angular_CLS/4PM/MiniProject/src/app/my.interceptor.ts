import { Injectable } from "@angular/core";
import { fetchToken } from './fetch.token';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class myInterceptor{
    constructor(private _service:fetchToken){}
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        if(req.url == "http://localhost:8080/login"){
            return handler.handle(req);
        }else{
            const req1 = req.clone({
                setHeaders:{
                    token : this._service.getToken()
                }
            })
            return handler.handle(req1);
        }
    }
}