import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlantListComponent, PlantDetailComponent, PlantFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [PlantListComponent, PlantDetailComponent, PlantFormComponent],
})
export class PlantModule {}
