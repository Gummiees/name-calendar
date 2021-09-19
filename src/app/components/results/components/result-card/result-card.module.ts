import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '@shared/pipes/pipes.module';
import { ResultCardComponent } from './result-card.component';

@NgModule({
  declarations: [ResultCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, PipesModule],
  exports: [ResultCardComponent],
  providers: [],
})
export class ResultCardModule {}
