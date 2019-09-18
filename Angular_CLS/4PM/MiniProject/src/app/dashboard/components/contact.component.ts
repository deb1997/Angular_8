import { Component } from "@angular/core";
import { contactService } from '../services/contact.service';
import errCallBack from 'src/app/config/error/errCallBack';
@Component({
    selector:"contact",
    templateUrl:"./contact.component.html"
})
export class contactComponent{
    private result:any;
    constructor(private _service:contactService){}
    ngOnInit(){
        this._service.getContactModuleData()
            .subscribe((posRes)=>{
                this.result = posRes;
        },errCallBack);
    };
};