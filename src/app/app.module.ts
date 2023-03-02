import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';

import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table'
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';

const appRoutes : Routes = [
  {path: "", component: HomeComponent},
  {path: ":id", component: UserInfoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
