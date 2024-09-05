import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReservationComponent} from "./reservation/list-reservation/reservation.component";
import {PaiementComponent} from "./paiement/list-paiement/paiement.component";
import {EvenementComponent} from "./evenement/list-evenement/evenement.component";
import {AddPaiementComponent} from "./paiement/add-paiement/add-paiement.component";
import {UpdatePaiementComponent} from "./paiement/update-paiement/update-paiement.component";
import {AddReservationComponent} from "./reservation/add-reservation/add-reservation.component";
import {UpdateReservationComponent} from "./reservation/update-reservation/update-reservation.component";
import {UpdateEvenementComponent} from "./evenement/update-evenement/update-evenement.component";
import {AddEvenementComponent} from "./evenement/add-evenement/add-evenement.component";

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
