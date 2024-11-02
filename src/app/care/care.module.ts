import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareListComponent } from './care-list/care-list.component';
import { CareFormComponent } from './care-form/care-form.component';



@NgModule({
  declarations: [
    CareListComponent,
    CareFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CareModule { }
