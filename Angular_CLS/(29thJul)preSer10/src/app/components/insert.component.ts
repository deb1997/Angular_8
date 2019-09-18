import { Component, OnInit, Input } from '@angular/core';
import { InsertService } from '../services/insert.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'insert',
  templateUrl: './insert.component.html',
  styles: []
})
export class InsertComponent implements OnInit {
  private status:any;
  @Input() var_one;
  constructor(private _service:InsertService) { }
  ngOnInit() {
  }
  public insert(obj:any):any{
      this._service.addProduct(obj).subscribe((posRes)=>{
          if(posRes.insert == "success"){
            this.var_one.push(obj);
            this.status = posRes;
          }
      },errCallBack);
  };
};
