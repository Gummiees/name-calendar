import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private dateChangeSubject: Subject<Date> = new Subject<Date>();

  constructor() {}

  getDateChangeSubject(): Subject<Date> {
    return this.dateChangeSubject;
  }

  setDate(date: Date): void {
    this.dateChangeSubject.next(date);
  }
}
