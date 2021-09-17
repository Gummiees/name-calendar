import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ResultsComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ResultsComponent],
  providers: [],
})
export class ResultsModule {}
