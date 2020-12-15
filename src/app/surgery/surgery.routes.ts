import {RouterModule, Routes} from '@angular/router';

import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { StartComponent } from './start/start.component';
import { SurgeryComponent } from './surgery.component';
import { ListDoctorsComponent } from './doctor/list-doctors/list-doctors.component';
import { ListPatientsComponent } from './patient/list-patients/list-patients.component';

const surgeryRoutes: Routes = [
  {
    path: 'surgery',
    component: SurgeryComponent,
    children: [
      { path: 'doctors', component: ListDoctorsComponent },
      { path: 'registrar-doctor', component: DoctorComponent },
      { path: 'start', component: StartComponent},
      { path: 'patients', component: ListPatientsComponent },
      { path: 'registrar-patient', component: PatientComponent},

      { path: '', redirectTo: '/surgery/start', pathMatch: 'full' }
    ]
  }
]

export const SURGERY_ROUTES = RouterModule.forChild(surgeryRoutes);
