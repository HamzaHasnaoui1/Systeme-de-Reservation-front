import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {evenementDto, EvenementPage} from '../models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) {}

  public getEvenement(): Observable<any> {
    return this.http.get(environment.apiUrl + '/Evenement/eventsList');
  }

  saveEvenement(evenement: evenementDto): Observable<Array<evenementDto>> {
    return this.http.post<Array<evenementDto>>(environment.apiUrl + '/Evenement/addEvent', evenement);
  }

  getEvenementById(id: number): Observable<evenementDto> {
    return this.http.get<evenementDto>(`${environment.apiUrl}/Evenement/getEvenementById/${id}`);
  }

  updateEvenement(id: number, evenement: evenementDto): Observable<evenementDto> {
    return this.http.put<evenementDto>(`${environment.apiUrl}/Evenement/updateEvent/${id}`, evenement);
  }

  /*public searchEvents(keyword : string):Observable<Array<evenementDto>>{
    return this.http.get<Array<evenementDto>>(environment.apiUrl+"/Evenement/search?keyword="+keyword)
  }*/

  public getEventPage( page : number, size : number):Observable<any>{
    return this.http.get(environment.apiUrl+'/Evenement/pageOperations', {
    params: {
      page: page.toString(),
        size: size.toString()
    }
  });
  }

  public deleteEvent (id:number):Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/Evenement/deleteEvent/${id}`)
  }
}
