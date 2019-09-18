//import Component
//Component class used to convert the TS to HTML Standards
import { Component } from "@angular/core";
//import dbService
import { dbService } from "../services/db.service";
//use Component
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
//export class
export class secondComponent{
    //declare result variable
    private result:string;
    //dependency injection
    constructor(private _service:dbService){}
    //first life cycle hook
    //ngOnInit() is the first life cycle hook
    //first life cycle hook used to write the business logic
    ngOnInit(){
        this.result= this._service.mongodbData();
    };
};






