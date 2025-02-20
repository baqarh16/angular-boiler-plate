import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get f() { return this.loginForm.controls; } // Shortcut for form controls

  onSubmit() {
    this.router.navigate(['/dashboard']); // Navigate to dashboard
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // Fake authentication logic
    if (this.loginForm.value.email === 'admin@example.com' && this.loginForm.value.password === 'password') {
      localStorage.setItem('token', 'mock-token'); // Store token
      this.router.navigate(['/dashboard']); // Navigate to dashboard
    } else {
      alert('Invalid login credentials');
    }
  }
}
