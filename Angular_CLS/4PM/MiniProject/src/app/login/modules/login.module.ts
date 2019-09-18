//import NgModule
//NgModule used to create the Custom Module
import { NgModule } from "@angular/core";
//import loginComponent
import { loginComponent } from '../components/login.component';
//import CommonModule
//CommonModule used to get the benfits from Framework
import { CommonModule } from '@angular/common';
//import HttpClientModule
//HttpClientModule used to make the Rest API Calls
import { HttpClientModule } from '@angular/common/http';
//import FormsModule
//ngModel directive present in FormsModule
import { FormsModule } from "@angular/forms";
//import loginService
import { loginService } from '../services/login.service';
//import Routes,RouterModule
import { Routes,RouterModule } from "@angular/router";
//make the loginComponent as default Component
export const appRoutes:Routes = [
    {path:"",component:loginComponent}
];
@NgModule({
    declarations:[loginComponent],
    imports:[CommonModule,
             HttpClientModule,
             FormsModule,
             RouterModule.forChild(appRoutes)],
    providers:[loginService],
    exports:[loginComponent]
})
export class loginModule{}