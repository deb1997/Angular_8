import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { indexComponent } from './index.component';
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
  {path:"",loadChildren:"./login/modules/login.module#loginModule"},
  {path:"dashboard",loadChildren:"./dashboard/module/dashboard.module#dashboardModule"}
];
@NgModule({
  declarations: [
    AppComponent,indexComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [indexComponent]
})
export class AppModule { }
