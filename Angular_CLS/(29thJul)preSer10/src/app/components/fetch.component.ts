import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'fetch',
  templateUrl: './fetch.component.html',
  styles: []
})
export class FetchComponent implements OnInit {
  public records:any;
  constructor(private _service:FetchService) { }
  ngOnInit() {
      this._service.getProducts().subscribe((posRes)=>{
          this.records = posRes;
      },errCallBack);
  }
}
