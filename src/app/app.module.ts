import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EditempComponent } from './editemp/editemp.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { AddempComponent } from './addemp/addemp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    UserhomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminhomeComponent,
    EditempComponent,
    EmployeeformComponent,
    AddempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
