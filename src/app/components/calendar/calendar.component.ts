import { Component } from '@angular/core';
import { StateService } from '@shared/services/state.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  constructor(public stateService: StateService) {}
}
