import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { PageoneComponent } from './components/pageone.component';
import { lazyRoutes } from './routes/app.routes';
import { authGuard } from './auth/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,lazyRoutes
  ],
  providers: [authGuard],
  bootstrap: [IndexComponent]
})
export class AppModule { }
