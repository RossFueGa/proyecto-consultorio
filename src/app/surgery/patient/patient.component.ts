import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService} from '../../service/patients.service';
import { Patient } from '../model/patient';
import {Doctor} from '../model/doctor';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patientForm: FormGroup;
  isDoctorCreated = false;
  doctor: Doctor = null;

  constructor(private router: Router,
              private patientsService: PatientsService,
              private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      nss: ['', Validators.required],
      name: ['', Validators.required],
      firstSurname: ['', Validators.required],
      secondSurname: ['', Validators.required],
      address: ['', Validators.required],
      idDoctor: ['', Validators.required]

    }) }

  ngOnInit() {
  }
  onGuardarPaciente() {
    console.log(this.patientForm.value);

    this.patientsService.guardarPacientes(this.patientForm.value)
      .subscribe(res => {
        console.log('Paciente Guardado');
        this.router.navigate(['/surgery/patient']);
      })
  }
  onDoctorCreated(doctorCreated) {
    console.log(doctorCreated);
    this.doctor = doctorCreated;
    this.patientForm.patchValue({ idDoctor: this.doctor.id });
    this.isDoctorCreated= this.doctor ? true : false;
  }



}
