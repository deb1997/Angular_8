import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { firstComponent } from './components/first.component';
import { secondComponent } from './components/second.component';
import { dbService } from './services/db.service';
@NgModule({
  declarations: [
    AppComponent,firstComponent,secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [dbService],
  bootstrap: [firstComponent]
})
export class AppModule { }
