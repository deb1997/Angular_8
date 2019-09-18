import { Component } from "@angular/core";
@Component({
    selector:"comp-two",
    templateUrl:"./comptwo.component.html"
})
export class componentTwo{
    public var_one:string;
    public var_two:string;
    constructor(){
        this.var_one = "Hello_1";
        this.var_two = "Hello_2";
    };
};