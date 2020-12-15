import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../model/patient';
import { PatientsService } from '../../../service/patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {
  patients: Array<Patient> = [];

  constructor(private patientsService: PatientsService,
              private router: Router) { }

  ngOnInit() {
    this.patientsService.obtenerPaciente()
      .subscribe((res: Array<Patient>) => {
        console.log(res)
        this.patients = res;
      });
  }
  onGuardarPaciente() {
    this.router.navigate(['/surgery/registrar-patient']);
  }
}
