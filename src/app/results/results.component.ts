import { Component, Input } from '@angular/core';
import { Namedays } from '@shared/models/api.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  @Input() public set results(res: Namedays) {
    this._results = res;
    this.countries = Object.keys(res);
  }
  public get results(): Namedays {
    return this._results;
  }
  @Input() public loading: boolean = false;
  public apiHasBeenCalled: boolean = false;
  public countries: string[] = [];
  private _results: Namedays = {};

  constructor() {}

  public anyResults(): boolean {
    return this.countries && this.countries.length > 0;
  }

  public noResults(): boolean {
    return this.apiHasBeenCalled && !this.anyResults();
  }
}
