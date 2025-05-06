import { Injectable,signal,Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  modifiedDataTable = signal<Boolean>(false)
}
