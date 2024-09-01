import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../services/reservation.service";
import {reservationDto} from "../models/reservation.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  listReservation: reservationDto[]=[];
constructor(private reservationService: ReservationService,private router: Router) { }

  ngOnInit() {
  this.reservationService.getReservation().subscribe(
    {
      next:(reservation) => {
        this.listReservation = reservation;
      },
      error: (err) => {
        console.log(err);
      }
    }
  );
  }
  editReserv(id: number) {
    this.router.navigate([`/updateReservation/${id}`]);
  }
}
