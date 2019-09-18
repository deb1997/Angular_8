import { Component } from "@angular/core";
import { dbService } from "../services/db.service";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    private result:string;
    constructor(private _service:dbService){}
    ngOnInit(){
        this.result = this._service.mySQLData();
    };
};