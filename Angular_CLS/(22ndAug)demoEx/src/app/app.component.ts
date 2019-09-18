import { Component } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
        $.ajax({
           url:"https://restcountries.eu/rest/v2/all",
           method:"GET",
           success:(posRes)=>{
              console.log(posRes);
           },
           error:(errRes)=>{
              console.log(errRes);
           }
        })
    }
}
