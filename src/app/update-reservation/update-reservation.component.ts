import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../services/evenement.service';
import { evenementDto } from '../models/evenement.model';
import { DatePipe } from '@angular/common';
import {reservationDto} from "../models/reservation.model";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css'],
  providers: [DatePipe]
})
export class UpdateReservationComponent implements OnInit {
  reservationToEdit: reservationDto = {
    id:              0,
    userId:          0,
    evenementId:     0,
    nbPlaceReserves: 0
  }
  formattedDate: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.reservationService.getReservationById(id).subscribe({
        next: (event) => {
          this.reservationToEdit = event;
        },
        error: (err) => {
          console.log('Failed to load event:', err);
        }
      });
    } else {
      console.log('No event ID provided');
    }
  }

  updateReserv() {
    if (this.reservationToEdit) {
      const id = this.reservationToEdit.id;
      this.reservationService.updateReservation(id, this.reservationToEdit).subscribe({
        next: (updatedReservResponse) => {
          console.log('Reserv updated successfully:', updatedReservResponse);
          this.router.navigate(['/reservation']);
        },
        error: (err) => {
          console.log('Failed to update reserv:', err);
        }
      });
    }
  }


}
