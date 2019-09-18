import { Routes,RouterModule } from "@angular/router";
import { PageoneComponent } from '../components/pageone.component';
import { ModuleWithProviders } from '@angular/core';
import { authGuard } from '../auth/auth.guard';
export const appRoutes:Routes = [
    {path:"page_one",component:PageoneComponent},
    {path:"lazy",
     loadChildren:"../countries/module/countries.module#CountriesModule",canLoad:[authGuard]}
];
export const lazyRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutes);