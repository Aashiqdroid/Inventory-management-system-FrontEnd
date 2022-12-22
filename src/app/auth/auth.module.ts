import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "./register/register.component";
import {AuthComponent} from './auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]
console.warn("Auth module loaded")

@NgModule({
  declarations: [

    RegisterComponent,
    AuthComponent,
    LoginComponent


  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,

        FormsModule,
        RouterOutlet,
        MatButtonModule,
        RouterLink,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCardModule, ReactiveFormsModule

    ],
  exports: [HttpClientModule, AuthComponent, RegisterComponent]
})
export class AuthModule {
}
