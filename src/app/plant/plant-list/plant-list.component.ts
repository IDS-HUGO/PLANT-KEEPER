import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../core/services/plant.service';
import { AuthService } from '../../core/services/auth.service'; // Asegúrate de importar AuthService
import { Plant } from '../../core/models/plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService, private authService: AuthService) {} // Inyectar AuthService

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlants().subscribe((data) => {
      this.plants = data;
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Método para verificar si el usuario está autenticado
  }
}
