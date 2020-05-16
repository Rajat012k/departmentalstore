import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  val: string;
  favoriteColor = '#ff1744';
  list = [
    { value: '#2962ff', name: 'blue' },
    { value: '#ff1744', name: 'red' },
    { value: '#00c853', name: 'green' },
    { value: '#ff6d00', name: 'orange' },
  ];

  ngOnInit(): void {}
  afterLogin() {
    this.router.navigate(['/dashboard']);
    console.log(this.val);
    sessionStorage.setItem('role', this.val);
  }
}
