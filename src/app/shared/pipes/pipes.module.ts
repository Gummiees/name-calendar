import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryNamePipe } from './country.pipe';

@NgModule({
  declarations: [CountryNamePipe],
  imports: [CommonModule],
  exports: [CountryNamePipe],
  providers: [],
})
export class PipesModule {}
