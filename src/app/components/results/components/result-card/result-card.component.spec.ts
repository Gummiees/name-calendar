import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '@shared/pipes/pipes.module';
import { ResultCardComponent } from './result-card.component';

describe('ResultCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, MatIconModule, PipesModule],
      declarations: [ResultCardComponent],
    }).compileComponents();
  });

  it(`should create the 'ResultsComponent'`, () => {
    const fixture = TestBed.createComponent(ResultCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`'multipleNames' should be 'true' if 'names' is 'Jose, Juan'`, () => {
    const fixture = TestBed.createComponent(ResultCardComponent);
    const app = fixture.componentInstance;
    app.names = 'Jose, Juan';
    expect(app.multipleNames()).toBeTrue();
  });

  it(`'multipleNames' should be 'false' if 'names' is 'Jose'`, () => {
    const fixture = TestBed.createComponent(ResultCardComponent);
    const app = fixture.componentInstance;
    app.names = 'Jose';
    expect(app.multipleNames()).toBeFalse();
  });

  it(`'multipleNames' should be 'false' if 'names' is null`, () => {
    const fixture = TestBed.createComponent(ResultCardComponent);
    const app = fixture.componentInstance;
    app.names = null;
    expect(app.multipleNames()).toBeFalse();
  });
});
