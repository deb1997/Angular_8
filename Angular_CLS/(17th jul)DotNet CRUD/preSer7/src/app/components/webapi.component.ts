import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../services/webapi.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'webapi',
  templateUrl: './webapi.component.html',
  styles: []
})
export class WebapiComponent implements OnInit {
  private result:any;
  constructor(private _service:WebapiService) { }
  ngOnInit() {
    this._service.getEmployees().subscribe((posRes)=>{
        this.result = posRes;
    },errCallBack);
  }
}
