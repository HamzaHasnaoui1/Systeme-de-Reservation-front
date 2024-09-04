import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { EvenementComponent } from './evenement/evenement.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { AddPaiementComponent } from './add-paiement/add-paiement.component';
import { UpdatePaiementComponent } from './update-paiement/update-paiement.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
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
