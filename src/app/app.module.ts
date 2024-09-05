import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/list-reservation/reservation.component';
import { PaiementComponent } from './paiement/list-paiement/paiement.component';
import { EvenementComponent } from './evenement/list-evenement/evenement.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';
import { AddPaiementComponent } from './paiement/add-paiement/add-paiement.component';
import { UpdatePaiementComponent } from './paiement/update-paiement/update-paiement.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './reservation/update-reservation/update-reservation.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    PaiementComponent,
    EvenementComponent,
    UserComponent,
    HomeComponent,
    AddEvenementComponent,
    UpdateEvenementComponent,
    AddPaiementComponent,
    UpdatePaiementComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    SearchPipe,
    SearchPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
