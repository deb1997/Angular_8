import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from '../components/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from '../services/countries.service';
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:CountriesComponent}
];
@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,HttpClientModule,
    RouterModule.forChild(appRoutes)
  ],
  providers:[CountriesService],
  exports:[CountriesComponent]
})
export class CountriesModule { }
