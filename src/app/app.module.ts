import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core'

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthModule} from "./auth/auth.module";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import * as path from "path";
import {LoginService} from "./login.service";
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdditemComponent} from "./dashboard/additem/additem.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {MatButtonModule} from '@angular/material/button';
import {StarterComponent} from "./starter/starter.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {AuthenticationGuard} from "./auth/authentication.guard";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {StarterModule} from "./starter/starter.module";
import {SearchitemComponent} from "./dashboard/searchitem/searchitem.component";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";


const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)

  },
  {path: '', component: StarterComponent}

]


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StarterModule,
    MatToolbarModule,
    MatButtonModule, MatIconModule,
    MatTableModule, MatPaginatorModule,
    MatSortModule, MatFormFieldModule,
    MatInputModule,BrowserAnimationsModule, ToastrModule.forRoot(),MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [RouterModule,MatCard],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
