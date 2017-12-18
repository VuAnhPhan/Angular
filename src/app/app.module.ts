import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';
import { MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatMenuModule} from '@angular/material/menu';
const appRoutes: Routes = [
  {
    path: '', //localhost/dashboard
    component: DashboardComponent
  },
  {
    path: 'my-form',
    component: MyFormComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,  MyFormComponent, DashboardComponent, LoginComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
