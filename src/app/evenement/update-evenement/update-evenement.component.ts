import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../../services/evenement.service';
import { evenementDto } from '../../models/evenement.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css'],
  providers: [DatePipe]
})
export class UpdateEvenementComponent implements OnInit {
  evenementToEdit: evenementDto = {
    id: 0,
    nom: '',
    date: new Date(),
    lieu: '',
    nbPlace: 0
  };
  formattedDate: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private evenementService: EvenementService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.evenementService.getEvenementById(id).subscribe({
        next: (event) => {
          this.evenementToEdit = event;
          this.formattedDate = this.datePipe.transform(this.evenementToEdit.date, 'yyyy-MM-dd');
        },
        error: (err) => {
          console.log('Failed to load event:', err);
        }
      });
    } else {
      console.log('No event ID provided');
    }
  }

  updateEvent() {
    if (this.evenementToEdit) {
      const id = this.evenementToEdit.id;
      this.evenementService.updateEvenement(id, this.evenementToEdit).subscribe({
        next: (updatedEventResponse) => {
          console.log('Event updated successfully:', updatedEventResponse);
          this.router.navigate(['/evenement']);
        },
        error: (err) => {
          console.log('Failed to update event:', err);
        }
      });
    }
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.evenementToEdit.date = new Date(input.value);
  }
}
