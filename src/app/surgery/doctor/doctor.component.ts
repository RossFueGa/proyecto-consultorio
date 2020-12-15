import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorsService } from '../../service/doctors.service';
import {Doctor} from '../model/doctor';

@Component({
  selector: 'doctor-surgery',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctorForm: FormGroup;
  @Input()
  isDoctorCreated: boolean;
  @Output()
  doctorCreated = new EventEmitter<Doctor>();



  constructor(private router: Router,
              private doctorsService: DoctorsService,
              private fb: FormBuilder) {
    this.doctorForm = this.fb.group({
        enrollment: ['', Validators.required],
         name: ['', Validators.required],
         speciality: ['', Validators.required],
          identificationCard: ['', Validators.required],
         address: ['', Validators.required]

    })



  }

  ngOnInit(){
  }
  onGuardarDoctor() {
    console.log(this.doctorForm.value);

    this.doctorsService.guardarDoctor(this.doctorForm.value)
      .subscribe(res => {
        console.log('Doctor Guardado');
        this.router.navigate(['/surgery/doctor']);
      })
  }



}
