import { Component } from '@angular/core';
import { CareService } from '../../core/services/care.service';
import { Care } from '../../core/models/care';

@Component({
  selector: 'app-care-form',
  templateUrl: './care-form.component.html',
})
export class CareFormComponent {
  care: Care = {
    plantaId: 1, // Ajusta según la planta seleccionada
    tipoCuidado: 'Riego',
    fechaCuidado: new Date(),
    notas: '',
  };

  constructor(private careService: CareService) {}

  addCare() {
    this.careService.addCareRecord(this.care).subscribe((response) => {
      console.log('Cuidado agregado', response);
      // Redirigir o limpiar formulario
    });
  }
}
