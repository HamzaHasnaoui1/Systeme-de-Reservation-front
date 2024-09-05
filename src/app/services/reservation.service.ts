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

  saveReservation(reservation: reservationDto): Observable<Array<reservationDto>> {
    return this.http.post<Array<reservationDto>>(environment.apiUrl + "/Reservation/addReservation", reservation);
  }

  getReservationById(id: number): Observable<reservationDto> {
    return this.http.get<reservationDto>(`${environment.apiUrl}/Reservation/getReservationById/${id}`);
  }

  updateReservation(id: number, reservation: reservationDto): Observable<reservationDto> {
    return this.http.put<reservationDto>(`${environment.apiUrl}/Reservation/updateReserv/${id}`, reservation);
  }

  public getEventPage( page : number, size : number):Observable<any>{
    return this.http.get(environment.apiUrl+'/Reservation/pageOperations', {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  public deleteReservation (id:number):Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/Reservation/deleteReservation/${id}`)
  }

}
