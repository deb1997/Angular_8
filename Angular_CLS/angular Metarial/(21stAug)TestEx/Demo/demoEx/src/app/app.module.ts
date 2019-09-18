import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
  "MatSortModule" is the module in angular material
  "MatSortModule" module used to sort the table data based on events.
  "MatSortModule" module containes following directives
    @matSort  (Attribute Type Directive)
    @(matSortChange) (event type directive)
    @mat-sort-header (Attribute type directive)
*/
