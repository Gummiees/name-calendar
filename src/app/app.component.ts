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
    private stateService: StateService,
    private apiService: ApiService
  ) {
    this.listenToDateChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // Has to be public in order to test it.
  removeNoNamesCountries(results?: Namedays | null): Namedays {
    if (!results) {
      return {};
    }
    const noResultsCountries = Object.keys(results).filter(
      (key) => !results[key] || results[key] === 'n/a'
    );
    noResultsCountries.forEach((key) => delete results[key]);
    return results;
  }

  // Has to be public in order to test it.
  async onSelectDate(date: Date): Promise<void> {
    this.date = date;
    try {
      this.loading = true;
      const response: Rs | null = await this.apiService.getNames(date);
      this.setResults(response);
    } catch (e) {
      this.results = {};
    } finally {
      this.loading = false;
    }
  }

  setResults(response: Rs | null): void {
    this.results = this.removeNoNamesCountries(response?.data?.namedays);
  }

  private listenToDateChanges(): void {
    const sub: Subscription = this.stateService
      .getDateChangeSubject()
      .subscribe((date: Date) => this.onSelectDate(date));
    this.subscriptions.push(sub);
  }
}
