import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FetchComponent } from './components/fetch.component';
import { InsertComponent } from './components/insert.component';
import { UpdateComponent } from './components/update.component';
import { DeleteComponent } from './components/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FetchComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [FetchComponent]
})
export class AppModule { }
