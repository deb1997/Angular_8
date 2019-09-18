import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../services/customers.service';

import { CountriesService } from '../services/countries.service';

import errCallBack from '../error/errCallBack';
@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  private result_one:any;
  private result_two:any;
  constructor(private _service1:CustomersService,
              private _service2:CountriesService) { }
  ngOnInit() {
      this._service1.getCustomers().subscribe((posRes1)=>{
          this.result_one = posRes1;
        /**************************************************/
          this._service2.getCountries().subscribe((posRes2)=>{
              this.result_two = posRes2;
          },errCallBack);
        /**************************************************/
      },errCallBack);
  }
}