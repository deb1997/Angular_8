import { Component, OnInit, Input } from '@angular/core';
import { UpdateService } from '../services/update.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {
  private status:any;
  @Input() var_one;
  constructor(private _service:UpdateService) { }
  ngOnInit() {
  }
  public update(obj:any):any{
     this._service.updateProduct(obj).subscribe((posRes)=>{
        if(posRes.update == "success"){
            for(var i:number=0;i<this.var_one.length;i++){
                if(this.var_one[i].p_id == obj.p_id){
                    this.var_one[i].p_name = obj.p_name;
                    this.var_one[i].p_cost = obj.p_cost;
                }
                this.status = posRes;
            }
        }
     },errCallBack);
  };
};
