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
  public date: Date | undefined;
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
    this.date = date;
    try {
      this.loading = true;
      const response: Rs = await this.apiService.getNames(date);
      this.results = this.removeNoNamesCountries(response?.data?.namedays);
    } catch (e) {
      this.results = {};
    } finally {
      this.loading = false;
    }
  }

  private removeNoNamesCountries(results?: Namedays): Namedays {
    if (!results) {
      return {};
    }
    const noResultsCountries = Object.keys(results).filter(
      (key) => !results[key] || results[key] === 'n/a'
    );
    noResultsCountries.forEach((key) => delete results[key]);
    return results;
  }
}
