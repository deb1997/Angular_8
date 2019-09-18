import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {
  private result:any;
  constructor(private _service:EmployeeService) { }
  ngOnInit() {
    this._service.getEmployees().subscribe((posRes)=>{
        this.result = posRes;
    },errCallBack);
  }
}
