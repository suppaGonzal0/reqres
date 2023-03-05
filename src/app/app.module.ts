import { AdminGuard } from './auth/admin.guard';
import { RoleGuard } from './auth/role.guard';
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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import {PaginatorModule} from 'primeng/paginator';
import {SidebarModule} from 'primeng/sidebar';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import {TooltipModule} from 'primeng/tooltip';
import { PromotionsComponent } from './promotions/promotions.component';
import { SettingsComponent } from './settings/settings.component';
import { ServersComponent } from './servers/servers.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';


const appRoutes : Routes = [
  {path: "", component: HomeComponent, canActivate:[AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "servers", component: ServersComponent, canActivate:[AuthGuard, AdminGuard]},
  {path: "settings", component: SettingsComponent, canActivate:[AuthGuard]},
  {path: "promotions", component: PromotionsComponent, canActivate:[AuthGuard, RoleGuard]},
  {path: ":id", component: UserInfoComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    PromotionsComponent,
    SettingsComponent,
    ServersComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DialogModule,
    PaginatorModule,
    SidebarModule,
    TooltipModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
