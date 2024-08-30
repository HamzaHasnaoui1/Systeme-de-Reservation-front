import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {reservationDto} from "../models/reservation.model";
import {environment} from "../../environments/environment";
import {evenementDto} from "../models/evenement.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  public getReservation(): Observable<any> {
    return this.http.get(environment.apiUrl + "/Reservation/reservationList");
  }

  saveReservation(reseration: reservationDto): Observable<Array<reservationDto>> {
    return this.http.post<Array<reservationDto>>(environment.apiUrl + "/Reservation/addReservation", reseration);
  }
}
