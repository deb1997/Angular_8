import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { countriesComponent } from './components/countries.component';
import { countriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,countriesComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [countriesService],
  bootstrap: [countriesComponent]
})
export class AppModule { }
