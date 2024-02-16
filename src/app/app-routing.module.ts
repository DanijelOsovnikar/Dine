import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { BookingComponent } from './core/booking/booking.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
