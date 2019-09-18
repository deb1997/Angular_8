//import Component
//Component used to convert the TS Standards to HTML Standards
import { Component } from "@angular/core";
//import countriesService
//countriesService containes getCountries()
//getCountries() returns Observable
import { countriesService } from "../services/countries.service";
//import HttpErrorResponse
//HttpErrorResponse used to categorize the Errors
import { HttpErrorResponse } from "@angular/common/http";
//use Component
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
//export the class
export class countriesComponent{
    //declare the result variable
    private result:any;
    //inject the countriesService
    constructor(private _service:countriesService){}
    //first life cycle hook
    ngOnInit(){
       this._service.getCountries().subscribe((posRes)=>{
            this.result = posRes;
       },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
       });
    };
};