import { Component, OnDestroy } from '@angular/core';
import { Namedays, Rs } from '@shared/models/api.model';
import { ApiService } from '@shared/services/api.service';
import { StateService } from '@shared/services/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public results: Namedays = {};
  public loading: boolean = false;
  private subscriptions: Subscription[] = [];
  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) {
    this.listenToDateChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private listenToDateChanges() {
    const sub: Subscription = this.stateService
      .getDateChangeSubject()
      .subscribe((date: Date) => this.onSelectDate(date));
    this.subscriptions.push(sub);
  }

  private async onSelectDate(date: Date) {
    try {
      this.loading = true;
      const response: Rs = await this.apiService.getNames(date);
      this.results = response?.data?.namedays || {};
    } catch (e) {
      this.results = {};
    } finally {
      this.loading = false;
    }
  }
}
