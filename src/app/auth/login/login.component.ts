import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario = '';
  contrasena = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.usuario, this.contrasena).subscribe(response => {
      console.log('Login exitoso', response);
      this.router.navigate(['/plants']);
    });
  }
}
