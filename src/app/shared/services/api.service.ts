import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rq, Rs } from '@shared/models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  async getNames(date: Date): Promise<Rs | null> {
    const rq: Rq | null = this.parseDateToRequest(date);
    if (!rq) {
      return null;
    }
    return this.httpClient.post<Rs>(`/api/namedays`, rq).toPromise();
  }

  parseDateToRequest(date: Date): Rq | null {
    if (!(date instanceof Date)) {
      return null;
    }
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
    };
  }
}
