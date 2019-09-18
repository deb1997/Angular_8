import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    var_one:string = "nareshit";
    var_two:string = "NARESHIT";
    var_three:string = "naresh it";
    var_four:number = 100;
    var_five:number=0.9;
    var_six:number = 100.12345;
    var_seven:Array<number> = [10,20,30,40,50];
    var_eigth:any={'uname':'admin','upwd':'admin'};
    var_nine:Promise<string>;
    var_ten:string = "Welcome";
    public getPromiseData():Promise<string>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              resolve("Hello");
            },5000);
        });
    };
    constructor(){
      this.var_nine = this.getPromiseData();
    };
}
