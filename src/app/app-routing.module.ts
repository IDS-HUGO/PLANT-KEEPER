import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { PlantFormComponent } from './plant/plant-form/plant-form.component';
import { PlantDetailComponent } from './plant/plant-detail/plant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plants', component: PlantListComponent },
  { path: 'plant-form', component: PlantFormComponent },
  { path: 'plants/:id', component: PlantDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
