import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import errCallBack from '../error/errCallBack';
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
      },errCallBack);
  }
}
