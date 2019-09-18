//import Injectable
//Injectable is used to create the Custom Service
import { Injectable } from "@angular/core";
//import HttpClient
//HttpClient used to make the rest api calls
import { HttpClient } from "@angular/common/http";
//HttpClient return type is Observable
//continuos updates from server to client called as Observable
//Observable present in rxjs package
//rxjs stands for reactive extension javascript package
import { Observable } from "rxjs";
//use Injectable
@Injectable()
//export class
export class countriesService{
    //inject HttpClient
    //Dependency Injection
    constructor(private _http:HttpClient){}
    //create the function
    public getCountries():Observable<any>{
        return this._http.get("https://restcountries.eu/rest/v2/all");
    };
}