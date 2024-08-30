
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

  formattedDate: string | null; // Utilisé pour l'affichage et l'entrée de la date

  evenements: Array<evenementDto> = []; // Déclaration pour stocker la liste des événements

  constructor(private evenementService: EvenementService, private datePipe: DatePipe) {
    // Initialisez formattedDate avec le format requis
    this.formattedDate = this.datePipe.transform(this.evenement.date, 'yyyy/MM/dd');
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const dateParts = input.value.split('/');

    if (dateParts.length === 3) {
      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];
      this.evenement.date = new Date(`${year}-${month}-${day}`);
    }
  }

  addEvent(): void {
    // Utilisez formattedDate pour la sauvegarde, vous n'avez pas besoin de convertir ici
    this.evenementService.saveEvenement(this.evenement).subscribe({
      next: (evenements) => {
        this.evenements = evenements; // Stockage des événements retournés par le service
        console.log('Événement ajouté avec succès', this.evenements);
        this.resetForm(); // Réinitialiser le formulaire après ajout
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
    this.formattedDate = this.datePipe.transform(this.evenement.date, 'yyyy/MM/dd');
  }
}
