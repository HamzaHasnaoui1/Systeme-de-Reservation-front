import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { evenementDto } from '../models/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css'],
  providers: [DatePipe]
})
export class AddEvenementComponent {

  evenement: evenementDto = {
    id: 0,
    nom: '',
    lieu: '',
    date: new Date(),
    nbPlace: 0
  };

  formattedDate: string | null;

  evenements: Array<evenementDto> = [];

  constructor(private evenementService: EvenementService, private datePipe: DatePipe) {
    this.formattedDate = this.datePipe.transform(this.evenement.date, 'yyyy-MM-dd'); // ISO format pour l'input de type date
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.evenement.date = new Date(input.value); // Directement assigner la date saisie
  }

  addEvent(): void {
    this.evenementService.saveEvenement(this.evenement).subscribe({
      next: (evenements) => {
        this.evenements = evenements;
        console.log('Événement ajouté avec succès', this.evenements);
        this.resetForm();
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de l\'événement', err);
      }
    });
  }

  private resetForm(): void {
    this.evenement = {
      id: 0,
      nom: '',
      lieu: '',
      date: new Date(),
      nbPlace: 0
    };
    this.formattedDate = this.datePipe.transform(this.evenement.date, 'yyyy-MM-dd'); // Remettre la date au format ISO
  }
}
