import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {reservationDto} from "../models/reservation.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public getReservation(): Observable<any> {
    return this.http.get(environment.apiUrl+"/Reservation/reservationList");
  }
}
