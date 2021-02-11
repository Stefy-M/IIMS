import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ProducerPortalComponent } from './producer-portal/producer-portal.component';
import { DashComponent } from './dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';


const routes : Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'producer-portal', component: ProducerPortalComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard', component: DashComponent },
  {path: 'register', component: RegisterComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ProducerPortalComponent,
    DashComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    GoogleChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
