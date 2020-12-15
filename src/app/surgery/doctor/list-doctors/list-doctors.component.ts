import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor';
import { DoctorsService } from '../../../service/doctors.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss']
})
export class ListDoctorsComponent implements OnInit {
  doctors: Array<Doctor> = [];

  constructor(private doctorsService: DoctorsService,
              private router: Router) { }

  ngOnInit() {
    this.doctorsService.obtenerDoctor()
      .subscribe((res: Array<Doctor>) => {
        console.log(res)
        this.doctors = res;
      });
  }
  onGuardarDoctor() {
    this.router.navigate(['/surgery/registrar-Doctor']);
  }

}
