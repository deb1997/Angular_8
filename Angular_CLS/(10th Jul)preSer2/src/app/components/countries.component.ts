import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  private result:any;
  constructor(private _service:CountriesService) { }
  ngOnInit() {
    this._service.getCountries().subscribe((posRes)=>{
        this.result = posRes;
    },(err:HttpErrorResponse)=>{
       if(err.error instanceof Error){
         console.log("client side error");
       }else{
         console.log("server side error");
       }
    });
  }
}
