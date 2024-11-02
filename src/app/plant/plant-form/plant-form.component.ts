import { Component } from '@angular/core';
import { PlantService } from '../../core/services/plant.service';
import { Router } from '@angular/router';
import { Plant } from '../../core/models/plant';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
})
export class PlantFormComponent {
  plant: Plant = {
    nombreComun: '',
    nombreCientifico: '',
    frecuenciaRiego: '',
    condicionesLuz: ''
  };

  constructor(
    private plantService: PlantService, 
    private router: Router, 
    private authService: AuthService // Mantenido como private
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  addPlant(): void {
    if (this.isLoggedIn) {
      this.plantService.addPlant(this.plant).subscribe(() => {
        this.router.navigate(['/plants']);
      });
    } else {
      alert('Debes iniciar sesión para agregar plantas.');
    }
  }
}
