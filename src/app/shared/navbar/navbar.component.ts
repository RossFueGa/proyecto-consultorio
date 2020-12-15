import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'navbar-surgery',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  isLogin: Boolean;

  constructor(private router: Router,
              private storageService: StorageService) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.storageService.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
