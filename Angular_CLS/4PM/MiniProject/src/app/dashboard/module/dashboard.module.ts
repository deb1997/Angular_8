import { NgModule } from "@angular/core";
import { dashboardComponent } from '../components/dashboard.component';
import { aboutComponent } from '../components/about.component';
import { portfolioComponent } from '../components/portfolio.component';
import { contactComponent } from '../components/contact.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { aboutService } from '../services/about.service';
import { portfolioService } from '../services/portfolio.service';
import { contactService } from '../services/contact.service';
import { logoutService } from '../services/logout.service';
import { Routes,RouterModule } from "@angular/router";
import { fetchToken } from 'src/app/fetch.token';
import { myInterceptor } from 'src/app/my.interceptor';
export const appRoutes:Routes = [
    {path:"",component:dashboardComponent,
    children:[{path:"about",component:aboutComponent},
              {path:"portfolio",component:portfolioComponent},
              {path:"contact",component:contactComponent}]}
];
@NgModule({
    declarations:[dashboardComponent,
                  aboutComponent,
                  portfolioComponent,
                  contactComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild(appRoutes)],
    providers:[aboutService,
               portfolioService,
               contactService,
               logoutService,
               fetchToken,
               {
                   provide:HTTP_INTERCEPTORS,
                   useClass:myInterceptor,
                   multi:true
               }],
    exports:[dashboardComponent]
})
export class dashboardModule{}