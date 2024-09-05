import { Pipe, PipeTransform } from '@angular/core';
import {EvenementComponent} from "../evenement/list-evenement/evenement.component";
import {evenementDto, EvenementPage} from "../models/evenement.model";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(events: EvenementPage[],keyword: string): EvenementPage[] {
    if (!events || !keyword) {
      return events;
    }
    keyword = keyword.toLowerCase();
    return events.filter(event => event.nom.toLowerCase().includes(keyword)
      /*||
      event.lieu.toLowerCase().includes(keyword)*/);
  }


}
