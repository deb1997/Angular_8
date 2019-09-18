import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { componentOne } from './comp.one';
import { componentTwo } from './comp.two';
@NgModule({
  declarations: [
    AppComponent,componentOne,componentTwo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [componentOne]
})
export class AppModule { }
