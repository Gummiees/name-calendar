import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Rs } from '@shared/models/api.model';
import { ApiService } from './api.service';
import { StateService } from './state.service';

describe('Services', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });

  it('ApiService should be created', () => {
    const apiService: ApiService = TestBed.inject(ApiService);
    expect(apiService).toBeTruthy();
  });

  it(`'parseDateToRequest' should be { day: 10, month: 5 }`, () => {
    const apiService: ApiService = TestBed.inject(ApiService);
    expect(apiService.parseDateToRequest(new Date(2021, 4, 10))).toEqual({
      day: 10,
      month: 5,
    });
  });

  it(`'parseDateToRequest' should be null`, () => {
    const apiService: ApiService = TestBed.inject(ApiService);
    const test: any = 'test';
    expect(apiService.parseDateToRequest(test)).toBeNull();
  });

  it(`'getNames' should be null`, async () => {
    const apiService: ApiService = TestBed.inject(ApiService);
    const test: any = 'test';
    const names = await apiService.getNames(test);
    expect(names).toBeNull();
  });

  it('StateService should be created', () => {
    const stateService: StateService = TestBed.inject(StateService);
    expect(stateService).toBeTruthy();
  });

  it(`'getDateChangeSubject' should not emit value when 'setDate' is called with a non Date parameter`, fakeAsync(() => {
    const stateService: StateService = TestBed.inject(StateService);
    const test: any = 'test';
    let data;
    stateService.getDateChangeSubject().subscribe((_data) => {
      data = _data;
    });
    stateService.setDate(test);
    tick(1000);
    expect(data).toBeUndefined();
  }));

  it(`'getDateChangeSubject' should emit value when 'setDate' is called with a correct parameter`, fakeAsync(() => {
    const stateService: StateService = TestBed.inject(StateService);
    let data;
    stateService.getDateChangeSubject().subscribe((_data) => {
      data = _data;
    });
    stateService.setDate(new Date());
    tick(1000);
    expect(data).toBeDefined();
  }));
});
