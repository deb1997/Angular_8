import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private var_one:string = "nareshit";
  private var_two:string = "REACTJS";
  private var_three:string = "naresh it";
  private var_four:number = 100;
  private var_five:Date = new Date();
  private var_six:any = {'uname':'admin','upwd':'admin'};
  private var_seven:number = 100.12345;
  private var_eigth:number = 0.9;
  private var_nine:number[] = [10,20,30,40,50];
  

  











  
    login_details:any = {"uname":"","upwd":""};
    login():any{
      console.log(this.login_details);
      if(this.login_details.uname == "admin" && 
         this.login_details.upwd == "admin"){
        alert("Login Success...!");
      }else{
        alert("Login Fail...!");
      }
    }
}
