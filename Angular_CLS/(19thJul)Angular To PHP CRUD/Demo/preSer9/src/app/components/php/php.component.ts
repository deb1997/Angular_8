import { Component, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';
import errCallBack from 'src/app/error/errCallBack';
@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styles: []
})
export class PhpComponent implements OnInit {
  private result:any;
  constructor(private _service:PhpService) { }
  ngOnInit() {
    this._service.getEmployees().subscribe((posRes)=>{
        this.result = posRes.employees;
    },errCallBack);
  }
}
