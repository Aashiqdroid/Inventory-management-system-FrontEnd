import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {AdditemComponent} from './additem/additem.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ToastrModule} from "ngx-toastr";
import {SearchitemComponent} from './searchitem/searchitem.component';
import {RegisterComponent} from "../auth/register/register.component";
import {LoginComponent} from "../auth/login/login.component";
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {path: 'add-item', component: AdditemComponent},
  {path: 'search-item', component: SearchitemComponent},
  {path: 'my-profile', component: MyprofileComponent},
  {path: 'update-profile', component: UpdateprofileComponent}
]
console.warn("dashboard module loaded")
@NgModule({
  declarations: [
    DashboardComponent,
    AdditemComponent,
    SearchitemComponent,
    MyprofileComponent,
    UpdateprofileComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,

    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSortModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, ToastrModule.forRoot({})

  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
