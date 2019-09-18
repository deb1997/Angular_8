import { Component, OnInit, Input } from '@angular/core';
import { DeleteService } from '../services/delete.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styles: []
})
export class DeleteComponent implements OnInit {
  private status:any;
  @Input() var_one;
  constructor(private _service:DeleteService) { }
  ngOnInit() {
  }
  public remove(obj:any):any{
     this._service.deleteProduct(obj).subscribe((posRes)=>{
        if(posRes.delete == "success"){
          let i = this.var_one.findIndex(element=>{
            return element.p_id == obj.p_id;
          });
          this.var_one.splice(i,1);
          this.status = posRes;
        }
     },errCallBack);
  };
};
