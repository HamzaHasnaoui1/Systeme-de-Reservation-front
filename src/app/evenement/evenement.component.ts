import {Component, OnInit} from '@angular/core';
import {evenementDto} from "../models/evenement.model";
import {ReservationService} from "../services/reservation.service";
import {EvenementService} from "../services/evenement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  listEvenements: evenementDto[]=[]
  constructor(private evenementService: EvenementService, private router:Router) {}

ngOnInit()  {
  this.evenementService.getEvenement().subscribe(
    {next:(evenement)=>{
      this.listEvenements=(evenement)
    },
      error: (err) => {
      console.log(err);
      }
    }
  )
  }
  editEvent(id: number) {
    this.router.navigate([`/updateEvenement/${id}`]);
  }

}
