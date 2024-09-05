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
  currentPage : number =0;
  pageSize : number =8;
  totalPages!:number;
constructor(private reservationService: ReservationService,private router: Router) { }

  ngOnInit() {
  this.reservationService.getReservation().subscribe(
    {
      next:(reservation) => {this.listReservation = reservation;},
      error: (err) => {console.log(err);
      }
    }
  );
  //this.handleSearchReserv()
  }


  handleSearchReserv() {
    this.reservationService.getEventPage(this.currentPage, this.pageSize).subscribe(
      {
        next:(success)=> this.listReservation =success,
        error: (err)=>console.log(err)
      }
    )
  }
  gotoPage(page: number, event: Event): void {
    event.preventDefault(); // Empêche la navigation par défaut
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.handleSearchReserv();
    }
  }

  editReserv(id: number) {
    this.router.navigate([`/updateReservation/${id}`]);
  }

  deleteReservation(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet reservation ?")) {
      this.reservationService.deleteReservation(id).subscribe({
        next: () => {
          this.listReservation = this.listReservation.filter(reserv => reserv.id !== id);
          alert("Reservation supprimé avec succès.");
        },
        error: (err) => console.log("Erreur lors de la suppression de la reservation :", err)
      });
    }
  }
}
