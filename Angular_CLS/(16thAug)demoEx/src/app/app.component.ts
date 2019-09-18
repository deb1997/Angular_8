import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private data:Promise<string>;
    constructor(){
      this.data = this.getData();
    };
    public getData():Promise<string>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve("async pipe");
          },5000);
      });
    };
}
