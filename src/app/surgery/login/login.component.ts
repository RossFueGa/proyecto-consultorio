import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import  { User} from '../model/user';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder,
              private storageService: StorageService) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });   }

  ngOnInit()  {}

  onLogin() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe((res: User) => {
        console.log('login success');
        console.log(res);
        const currentUser = JSON.stringify(res);
        this.storageService.setItem('currentUser', currentUser);
        this.router.navigate(['/surgery/start']);
      });
  }

}
