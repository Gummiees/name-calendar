import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rq, Rs } from '@shared/models/api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  async getNames(date: Date): Promise<Rs> {
    return this.httpClient
      .post<Rs>(`${environment.apiUrl}/namedays`, this.parseDateToRequest(date))
      .toPromise();
  }

  private parseDateToRequest(date: Date): Rq {
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
    };
  }
}
