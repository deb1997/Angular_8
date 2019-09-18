/*
    this file used to authenticate the Http Requests
*/
//import Injectable
//we will create Interceptors by using Custom Services
import { Injectable } from "@angular/core";
//import HttpRequest
//HttpRequest used to receive the requests from Services
//import HttpHandler
//HttpHandler used to bypass the requests to server
//import HttpEvent
//HttpEvent used to handle the Exceptions raised by interceptors
import { HttpRequest,
         HttpHandler,
         HttpEvent } from "@angular/common/http";
//import Observable
//Observable used to receive the continuos updates on Exceptions
import { Observable } from "rxjs";
//use Injectable
@Injectable()
//export the class
export class myInterceptor{
    //intercept() used to authenticate the Http Requests
    intercept(req:HttpRequest<any>,handler:HttpHandler)
                                :Observable<HttpEvent<any>>{
        console.log("in interceptor");
        const req1 = req.clone({
            setHeaders:{
                'authorization':"sadhalskhdsakldhas"
            }
        });
        return handler.handle(req1);
    };
};






