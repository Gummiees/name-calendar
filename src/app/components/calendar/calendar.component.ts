import { Component, OnInit } from '@angular/core';
import { StateService } from '@shared/services/state.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  public onDateChanges(event: any) {
    console.log('event', event);
    this.stateService.setDate(event);
  }
}
