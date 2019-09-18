import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    @Input() p_id;
    @Input() p_name;
    @Input() p_cost;

    @Output() sendData:EventEmitter<any> = new EventEmitter();

    clickMe(){
        this.sendData.emit(this.p_id+"..."+this.p_name+"..."+this.p_cost);
    };
};