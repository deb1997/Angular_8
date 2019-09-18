import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styles: []
})
export class CustomersComponent implements OnInit {
  private result:any;
  constructor(private _service:CustomersService){ }
  ngOnInit(){
     this._service.getCustomers().subscribe((posRes)=>{
        this.result = posRes;
     },errCallBack);
  }
}
