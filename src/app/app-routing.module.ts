import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptionistPageComponent } from './receptionist-page/receptionist-page.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard', component: ReceptionistPageComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
