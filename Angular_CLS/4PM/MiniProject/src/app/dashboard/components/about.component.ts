import { Component } from "@angular/core";
import { aboutService } from '../services/about.service';
import errCallBack from 'src/app/config/error/errCallBack';
@Component({
    selector:"about",
    templateUrl:"./about.component.html"
})
export class aboutComponent{
    private result:any;
    constructor(private _service:aboutService){}
    ngOnInit(){
        this._service.getAboutModuleData()  
            .subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    };
};  