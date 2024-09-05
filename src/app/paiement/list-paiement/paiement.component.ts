import {Component, OnInit} from '@angular/core';
import {paiementDto} from "../../models/paiement.model";
import {PaiementService} from "../../services/paiement.service";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit{
listPaiements: paiementDto[]=[]

  constructor(private paiementService: PaiementService) {}

ngOnInit() {
  this.paiementService.getPaiement().subscribe({
    next:(paiement)=>{this.listPaiements=paiement},

    error: (err) => {err}
  });
}
}
