import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultCardModule } from './components/result-card/result-card.module';
import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CommonModule, ResultCardModule],
      declarations: [ResultsComponent],
    }).compileComponents();
  });

  it(`should create the 'ResultsComponent'`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`'anyResults' should be 'true' if 'countries' has values`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.countries = ['es', 'it'];
    expect(app.anyResults()).toBeTrue();
  });

  it(`'anyResults' should be 'false' if 'countries' is empty`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.countries = [];
    expect(app.anyResults()).toBeFalse();
  });

  it(`'anyResults' should be 'false' if nothing declared in the component changes`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.countries = [];
    expect(app.anyResults()).toBeFalse();
  });

  it(`'noResults' should be 'false' if nothing declared in the component changes`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    expect(app.noResults()).toBeFalse();
  });

  it(`'noResults' should be 'false' if 'firstApiCallFinished' is 'false'`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.firstApiCallFinished = false;
    expect(app.noResults()).toBeFalse();
  });

  it(`'noResults' should be 'false' if 'anyResults' is 'true'`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.firstApiCallFinished = true;
    app.countries = ['es', 'it'];
    expect(app.noResults()).toBeFalse();
  });

  it(`'noResults' should be 'true' if 'firstApiCallFinished' is 'true' 'anyResults' is 'false'`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.firstApiCallFinished = true;
    app.countries = [];
    expect(app.noResults()).toBeTrue();
  });

  it(`'countries' should be ['es', 'it']`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.results = { es: 'Test', it: 'Test 2' };
    expect(app.countries).toEqual(['es', 'it']);
  });

  it(`'countries' should be []`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.results = {};
    expect(app.countries).toEqual([]);
  });

  it(`'firstApiCallFinished' should be true`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.results = { es: 'Test', it: 'Test 2' };
    expect(app.firstApiCallFinished).toBeTrue();
  });

  it(`'firstApiCallFinished' should be false`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.results = {};
    expect(app.firstApiCallFinished).toBeFalse();
  });

  it(`'results' should be {}`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.results = {};
    expect(app.results).toEqual({});
  });

  it(`'results' should be { es: 'Test', it: 'Test 2' }`, () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    app.results = { es: 'Test', it: 'Test 2' };
    expect(app.results).toEqual({ es: 'Test', it: 'Test 2' });
  });
});
