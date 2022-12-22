import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterComponent } from './starter.component';
import {RouterLinkWithHref, RouterModule} from "@angular/router";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardModule} from "@angular/material/card";
import {Component} from '@angular/core'


@NgModule({
  declarations: [
    StarterComponent
  ],
    imports: [
        CommonModule,
        RouterLinkWithHref,
        RouterModule,
        MatRippleModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],exports:[MatCardModule]
})
export class StarterModule { }
