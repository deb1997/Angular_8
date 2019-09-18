import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { myInterceptor } from './interceptors/my.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:myInterceptor,
    multi:true
  }],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
