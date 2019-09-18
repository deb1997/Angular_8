import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series.component';
import { HttpClientModule } from '@angular/common/http';
import { ParallelComponent } from './components/parallel.component';
@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    ParallelComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [ParallelComponent]
})
export class AppModule { }
