import { Component, Input } from '@angular/core';
import { Namedays } from '@shared/models/api.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
/** In this component I use inputs instead of RxJs to prove knowledgement of inputs/outputs. */
export class ResultsComponent {
  @Input() public set results(res: Namedays) {
    this._results = res;
    this.countries = Object.keys(res);
    if (this.countries.length > 0) {
      this.firstApiCallFinished = true;
    }
  }
  public get results(): Namedays {
    return this._results;
  }
  @Input() public loading: boolean = false;
  @Input() public date: Date | undefined;
  // Has to be public in order to test it.
  public firstApiCallFinished: boolean = false;
  public countries: string[] = [];
  private _results: Namedays = {};

  constructor() {}

  public anyResults(): boolean {
    return this.countries && this.countries.length > 0;
  }

  public noResults(): boolean {
    return this.firstApiCallFinished && !this.anyResults();
  }
}
