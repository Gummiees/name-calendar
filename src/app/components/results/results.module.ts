import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultCardModule } from './components/result-card/result-card.module';
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [CommonModule, ResultCardModule],
  exports: [ResultsComponent],
  providers: [],
})
export class ResultsModule {}
