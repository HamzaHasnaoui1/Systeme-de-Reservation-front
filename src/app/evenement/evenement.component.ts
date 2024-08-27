import {Component, OnInit} from '@angular/core';
import {evenementDto} from "../models/evenement.model";
import {ReservationService} from "../services/reservation.service";
import {EvenementService} from "../services/evenement.service";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  listEvenements: evenementDto[]=[]
  constructor(private evenementService: EvenementService) {}

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
}
