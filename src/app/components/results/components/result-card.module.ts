import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ResultCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [ResultCardComponent],
  providers: [],
})
export class ResultCardModule {}
