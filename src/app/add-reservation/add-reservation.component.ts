import { Component } from '@angular/core';
import {reservationDto} from "../models/reservation.model";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
reservation :reservationDto = {
  id:              0,
  userId:          0,
  evenementId:     0,
  nbPlaceReserves: 0
}

reservations : reservationDto []= [];

constructor(public reservationService: ReservationService) {}

  addReservation() {
  this.reservationService.saveReservation(this.reservation).subscribe({
    next:(reservations) => {
      this.reservations = reservations;
      console.log('Reservation ajouté avec succès', this.reservations);
      this.resetForm();
    },
    error: (err) => {
      console.error('Erreur lors de l\'ajout de Reservation', err);
    }  });
  }

  private resetForm(): void {
    this.reservation = {
      id:              0,
      userId:          0,
      evenementId:     0,
      nbPlaceReserves: 0
    };
  }
}
