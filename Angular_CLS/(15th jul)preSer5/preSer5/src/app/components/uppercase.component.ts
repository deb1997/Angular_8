import { Component, OnInit } from '@angular/core';
import { UppercaseService } from '../services/uppercase.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styles: []
})
export class UppercaseComponent implements OnInit {
  private result:any;
  constructor(private _service:UppercaseService) { }
  ngOnInit() {
  }
  clickMe(data:any):any{
    this._service.convertToUpperCase(data)
        .subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
  };
};
