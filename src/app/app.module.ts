import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';

import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table'
import {CardModule} from 'primeng/card';

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
    RouterModule.forRoot(appRoutes),
    TableModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
