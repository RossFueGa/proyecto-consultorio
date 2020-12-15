import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder ) {
    this.registroForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      telephone: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(){
  }

  onGuardarUsuario() {
    console.log(this.registroForm.value);

    this.userService.guardarUsuario(this.registroForm.value)
      .subscribe(res => {
        console.log('usuario registrado');
        this.router.navigate(['/login']);
      });
  }

}
