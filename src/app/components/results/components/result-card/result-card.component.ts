import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  @Input() public country: string | null = null;
  @Input() public names: string | null = null;
  constructor() {}

  /**
   * Checks if the variable `names` contains one or more names.
   *
   * I firstly did split(',').length > 0, but the performance using simply includes(',') is way more optimized since it doesn't need to create
   * an array. I took a photo of a profiler I did that should be on the root of the project.
   *
   * The results were:
   * ~165ms (split)
   * ~22.5ms (includes)
   *
   * So about 7.5x faster.
   */
  public multipleNames(): boolean {
    return this.names?.includes(',') || false;
  }
}
