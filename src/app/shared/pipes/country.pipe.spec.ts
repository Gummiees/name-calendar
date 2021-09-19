import { CountryNamePipe } from './country.pipe';

describe('CountryNamePipe', () => {
  let pipe: CountryNamePipe;

  beforeEach(() => {
    pipe = new CountryNamePipe();
  });

  it(`'should be null when parameter is null`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it(`'should be null when parameter is 'test'`, () => {
    expect(pipe.transform('test')).toBeNull();
  });

  it(`'should be 'Austria' when parameter is 'at'`, () => {
    expect(pipe.transform('at')).toEqual('Austria');
  });

  it(`'should be 'Bulgaria' when parameter is 'bg'`, () => {
    expect(pipe.transform('bg')).toEqual('Bulgaria');
  });

  it(`'should be 'Czech Republic' when parameter is 'cz'`, () => {
    expect(pipe.transform('cz')).toEqual('Czech Republic');
  });

  it(`'should be 'Germany' when parameter is 'de'`, () => {
    expect(pipe.transform('de')).toEqual('Germany');
  });

  it(`'should be 'Denmark' when parameter is 'dk'`, () => {
    expect(pipe.transform('dk')).toEqual('Denmark');
  });

  it(`'should be 'Estonia' when parameter is 'ee'`, () => {
    expect(pipe.transform('ee')).toEqual('Estonia');
  });

  it(`'should be 'Spain' when parameter is 'es'`, () => {
    expect(pipe.transform('es')).toEqual('Spain');
  });

  it(`'should be 'Finland' when parameter is 'fi'`, () => {
    expect(pipe.transform('fi')).toEqual('Finland');
  });

  it(`'should be 'France' when parameter is 'fr'`, () => {
    expect(pipe.transform('fr')).toEqual('France');
  });

  it(`'should be 'Greece' when parameter is 'gr'`, () => {
    expect(pipe.transform('gr')).toEqual('Greece');
  });

  it(`'should be 'Croatia' when parameter is 'hr'`, () => {
    expect(pipe.transform('hr')).toEqual('Croatia');
  });

  it(`'should be 'Hungary' when parameter is 'hu'`, () => {
    expect(pipe.transform('hu')).toEqual('Hungary');
  });

  it(`'should be 'Italy' when parameter is 'it'`, () => {
    expect(pipe.transform('it')).toEqual('Italy');
  });

  it(`'should be 'Lithuania' when parameter is 'lt'`, () => {
    expect(pipe.transform('lt')).toEqual('Lithuania');
  });

  it(`'should be 'Latvia' when parameter is 'lv'`, () => {
    expect(pipe.transform('lv')).toEqual('Latvia');
  });

  it(`'should be 'Poland' when parameter is 'pl'`, () => {
    expect(pipe.transform('pl')).toEqual('Poland');
  });

  it(`'should be 'Russia' when parameter is 'ru'`, () => {
    expect(pipe.transform('ru')).toEqual('Russia');
  });

  it(`'should be 'Sweden' when parameter is 'se'`, () => {
    expect(pipe.transform('se')).toEqual('Sweden');
  });

  it(`'should be 'Slovakia' when parameter is 'sk'`, () => {
    expect(pipe.transform('sk')).toEqual('Slovakia');
  });

  it(`'should be 'USA' when parameter is 'us'`, () => {
    expect(pipe.transform('us')).toEqual('USA');
  });
});
