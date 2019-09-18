import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { parentComponent } from './parent.component';
import { childComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,parentComponent,childComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [parentComponent]
})
export class AppModule { }
