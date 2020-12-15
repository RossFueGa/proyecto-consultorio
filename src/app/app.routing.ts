import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './surgery/login/login.component';
import { RegistryComponent } from './surgery/registry/registry.component';
import { PatientComponent } from './surgery/patient/patient.component';
import { DoctorComponent } from './surgery/doctor/doctor.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'doctor', component: DoctorComponent },

  { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
