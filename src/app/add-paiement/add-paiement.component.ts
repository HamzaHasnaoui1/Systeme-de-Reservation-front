import { Component } from '@angular/core';
import {paiementDto} from "../models/paiement.model";
import {ReservationService} from "../services/reservation.service";
import {PaiementService} from "../services/paiement.service";

@Component({
  selector: 'app-add-paiement',
  templateUrl: './add-paiement.component.html',
  styleUrls: ['./add-paiement.component.css']
})
export class AddPaiementComponent {
paiement : paiementDto = {
  id:            0,
  reservationId: 0,
  montant:       0,
  description:   ""
}

paiements : paiementDto[]=[];

constructor(public paiementService : PaiementService) {}

addPaiement(){
  this.paiementService.addPaiement(this.paiement).subscribe({
    next:(paiements)=>{
      this.paiements=paiements;
      console.log('Paiement ajouté avec succès', this.paiements);
      this.resetForm()
    },
    error: (err) => {
      console.error('Erreur lors de l\'ajout du paiement', err)},
  });
}

  private resetForm(): void {
    this.paiement = {
      id: 0,
      reservationId: 0,
      montant: 0,
      description: ""
    }
  }
}
