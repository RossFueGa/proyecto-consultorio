import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import  { SURGERY_ROUTES } from './surgery.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';
import { ListDoctorsComponent } from './doctor/list-doctors/list-doctors.component';
import { ListPatientsComponent } from './patient/list-patients/list-patients.component';
import { SharedModule } from '../shared/shared.module';
import { StartComponent} from './start/start.component';
import { RegistryComponent } from './registry/registry.component';
import {RouterModule} from '@angular/router';
import {SurgeryComponent} from './surgery.component';

@NgModule({
  declarations: [
    DoctorComponent,
    PatientComponent,
    LoginComponent,
    StartComponent,
    SurgeryComponent,
    ListDoctorsComponent,
    ListPatientsComponent,
    RegistryComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SURGERY_ROUTES,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    DoctorComponent,
    PatientComponent,
    ListPatientsComponent,
    ListDoctorsComponent,
    LoginComponent,
    SurgeryComponent,
    RegistryComponent
  ]
})
export class SurgeryModule { }
