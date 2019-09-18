import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   constructor(public snackBar: MatSnackBar) {}
   openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 5000,
      });
   } 
   Page_One:string = "MySQL Data....!";
   Page_Two:string = "MongoDB Data...!";
   Page_Three:string = "SQLServer Data...!";
}
