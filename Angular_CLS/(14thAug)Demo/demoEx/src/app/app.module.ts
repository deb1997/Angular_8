import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { reversePipe } from './reverse.pipe';
import { customMsgPipe } from './custom.message';
import { myDirective } from './my.directive';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,reversePipe,customMsgPipe,myDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
