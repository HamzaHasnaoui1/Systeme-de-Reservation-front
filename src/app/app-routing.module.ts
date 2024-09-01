import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {PaiementComponent} from "./paiement/paiement.component";
import {EvenementComponent} from "./evenement/evenement.component";
import {AddPaiementComponent} from "./add-paiement/add-paiement.component";
import {UpdatePaiementComponent} from "./update-paiement/update-paiement.component";
import {AddReservationComponent} from "./add-reservation/add-reservation.component";
import {UpdateReservationComponent} from "./update-reservation/update-reservation.component";
import {UpdateEvenementComponent} from "./update-evenement/update-evenement.component";
import {AddEvenementComponent} from "./add-evenement/add-evenement.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'reservation', component: ReservationComponent },
  {path:'addReservation', component: AddReservationComponent },
  {path:'updateReservation/:id', component: UpdateReservationComponent },
  {path:'paiement', component: PaiementComponent },
  {path:'addPaiement', component: AddPaiementComponent },
  {path:'updatePaiement', component: UpdatePaiementComponent },
  {path:'evenement', component: EvenementComponent },
  {path:'addEvenement', component: AddEvenementComponent },
  {path:'updateEvenement/:id', component: UpdateEvenementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
