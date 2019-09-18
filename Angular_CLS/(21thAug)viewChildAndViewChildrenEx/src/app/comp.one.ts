import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { componentTwo } from './comp.two';
@Component({
    selector:"comp-one",
    templateUrl:"./compone.component.html"
})
export class componentOne{
//    @ViewChild(componentTwo,{static:true})
//     private _obj:componentTwo;
//     clickMe():any{
//         this._obj.var_one = "Welcome_1";
//         this._obj.var_two = "Welcome_2";
//     };

    @ViewChildren(componentTwo)
    private _obj:QueryList<componentTwo> = new QueryList();
    private my_array:Array<any> = [];
    ngAfterViewInit(){
        this.my_array = this._obj.toArray();
    };
    clickMe(){
        this.my_array.forEach((el)=>{
            el.var_one = "Welcome_1";
            el.var_two = "Welcome_2";
        });
    };
};