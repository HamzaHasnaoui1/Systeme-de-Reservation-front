import { Component, OnInit } from '@angular/core';
import {evenementDto, EvenementPage} from "../../models/evenement.model";
import { EvenementService } from "../../services/evenement.service";
import { Router } from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  listEvenements: EvenementPage[] = [];
  errorMessage: string | undefined;
  searchFormGroup: FormGroup;
  currentPage : number =0;
  pageSize : number =8;
  totalPages!:number;

  constructor(private evenementService: EvenementService, private router: Router, private fb: FormBuilder) {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
  }

  ngOnInit() {
 //   this.loadEvenements();
    this.handleSearchEvents();
  }

  /*loadEvenements() {
    this.evenementService.getEvenement().subscribe({
      next: (evenements) => this.listEvenements = evenements,
      error: (err) => this.errorMessage = err.message
    });
  }*/

  /*handleSearchEvents() {
    const keyword = this.searchFormGroup?.value.keyword || "";
    this.evenementService.searchEvents(keyword).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    ).subscribe({
      next: (evenements) => this.listEvenements = evenements,
      error: (err) => this.errorMessage = err.message
    });
  }*/
  /*handleSearchEvents() {
    his.evenementService.getEvenement().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    ).subscribe({
      next: (evenements) => this.listEvenements = evenements,
      error: (err) => this.errorMessage = err.message
    });*/


  handleSearchEvents() {
    this.evenementService.getEventPage(this.currentPage, this.pageSize).subscribe(
      {
        next:(success)=> this.listEvenements =success,
        error: (err)=>console.log(err)
      }
    )
  }
  gotoPage(page: number, event: Event): void {
    event.preventDefault(); // Empêche la navigation par défaut
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.handleSearchEvents();
    }
  }

  /*handleSearchEvents(): void {
    this.evenementService.getEventPage(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.listEvenements = response;
        this.currentPage = response.number;
        this.totalPages = response.totalPages;
      },
      error: (err) => {
        console.error('Error fetching events', err);
      }
    });
  }*/
  /*handlePageChange(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.handleSearchEvents();
    }
  }*/

  editEvent(id: number) {
    this.router.navigate([`/updateEvenement/${id}`]);
  }


  deleteEvent(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
      this.evenementService.deleteEvent(id).subscribe({
        next: () => {
          this.listEvenements = this.listEvenements.filter(event => event.id !== id);
          alert("Événement supprimé avec succès.");
        },
        error: (err) => console.log("Erreur lors de la suppression de l'événement :", err)
      });
    }
  }
}
