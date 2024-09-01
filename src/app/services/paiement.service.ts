import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {paiementDto} from "../models/paiement.model";
import {reservationDto} from "../models/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http: HttpClient) { }

  public getPaiement () : Observable<any> {
    return this.http.get(environment.apiUrl+"/Paiement/listPaiement");
  }

   addPaiement(paiement: paiementDto): Observable<Array<paiementDto>> {
    return this.http.post<Array<paiementDto>>(environment.apiUrl+"/Paiement/addPaiement", paiement);
   }

}
