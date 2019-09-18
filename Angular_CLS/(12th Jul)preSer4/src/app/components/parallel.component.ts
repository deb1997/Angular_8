import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../services/customers.service';

import { CountriesService } from '../services/countries.service';

import { Observable } from 'rxjs-compat';

import errCallBack from '../error/errCallBack';
@Component({
  selector: 'parallel',
  templateUrl: './parallel.component.html',
  styles: []
})
export class ParallelComponent implements OnInit {
    private result_one:any;
    private result_two:any;
    constructor(private _service1:CustomersService,
                private _service2:CountriesService){}
    ngOnInit(){
        Observable.forkJoin([
            this._service1.getCustomers(),
            this._service2.getCountries()
        ]).subscribe((posRes)=>{
            this.result_one = posRes[0];
            this.result_two = posRes[1];
        },errCallBack);
    };
};
