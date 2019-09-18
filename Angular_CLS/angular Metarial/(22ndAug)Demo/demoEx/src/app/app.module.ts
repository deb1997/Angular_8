import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*
    "MatGridListModule" used to display the Grid
    Layout on webpage
*/
import { MatGridListModule } from '@angular/material';




/*
  "MatTabsModule" used to create the Tabs in angular
  applications
*/
import { MatTabsModule } from '@angular/material';



/*
   "MatPaginatorModule" used to manipulate the table
   data.
*/
import { MatPaginatorModule } from '@angular/material'






/*
  "MatSnackBarModule" is the predefined module, used to
   display the Toast Messages.
  "MatButtonModule" is the predefined module, used to  
   display the material buttons 
*/
import { MatButtonModule,MatSnackBarModule } 
from '@angular/material'



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
