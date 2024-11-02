import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user = {
    nombre: '',
    apellidoPaterno: '',
    correoElectronico: '',
    usuario: '',
    contrasena: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(response => {
      console.log('Registro exitoso', response);
      this.router.navigate(['/login']);
    });
  }
}
