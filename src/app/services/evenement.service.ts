import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) {}

  public getEvenement(): Observable<any> {
    return this.http.get(environment.apiUrl+"/Evenemnet/eventsList");
  }
}

