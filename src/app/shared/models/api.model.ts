export class Rs {
  status: string;
  data: Data;

  constructor(status: string, data: Data) {
    this.status = status;
    this.data = data;
  }
}

export class Data {
  date: string;
  namedays: Namedays;

  constructor(date: string, namedays: Namedays) {
    this.date = date;
    this.namedays = namedays;
  }
}

export class Rq {
  country?: string;
  day: number;
  month: number;

  constructor(day: number, month: number, country?: string) {
    this.day = day;
    this.month = month;
    this.country = country;
  }
}

export class Namedays {
  [countryName: string]: string;
}
