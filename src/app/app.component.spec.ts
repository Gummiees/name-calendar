import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { Rs } from '@shared/models/api.model';
import { AppComponent } from './app.component';
import { CalendarModule } from './components/calendar/calendar.module';
import { ResultsModule } from './components/results/results.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        CalendarModule,
        ResultsModule,
        MatDividerModule,
        MatProgressSpinnerModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`loading should be 'false'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.loading).toBeFalse();
  });

  it(`'removeNoNamesCountries' should be '{}' if no parameters are given`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const results = app.removeNoNamesCountries();
    expect(results).toEqual({});
  });

  it(`'removeNoNamesCountries' should be '{}' if parameter is null`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const results = app.removeNoNamesCountries(null);
    expect(results).toEqual({});
  });

  it(`'removeNoNamesCountries' should be '{}' if parameter is '{}'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const results = app.removeNoNamesCountries({});
    expect(results).toEqual({});
  });

  it(`'removeNoNamesCountries' should remove 'n/a' but not 'Jose'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const countryNames = { it: 'n/a', es: 'Jose' };
    const results = app.removeNoNamesCountries(countryNames);
    expect(results).toEqual({ es: 'Jose' });
  });

  it(`while 'onSelectDate' is being executed, loading should be true`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onSelectDate(new Date());
    expect(app.loading).toBeTrue();
  });

  it(`after 'onSelectDate' is executed with a wrong parameter, 'results' should be {}`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const test: any = 'test';
    await app.onSelectDate(test);
    expect(app.results).toEqual({});
  });

  it(`'results' should be defined, not null and have some key after calling 'setResults' properly`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const response: Rs = {
      data: {
        date: '01/02/2021',
        namedays: {
          it: 'Italia',
        },
      },
      status: '200',
    };
    app.setResults(response);
    expect(app.results && Object.keys(app.results).length > 0).toBeTrue();
  });

  it(`'results' should be {} after calling 'setResults' with null as parameter`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setResults(null);
    expect(app.results).toEqual({});
  });
});
