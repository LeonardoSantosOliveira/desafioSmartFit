import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from './interfaces/unit-response/units-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitService {
  private readonly APIUrl: string = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private readonly _httpClient: HttpClient) { }

  getAllUnits(): Observable<UnitsResponse> {
    return this._httpClient.get<UnitsResponse>(this.APIUrl)
  }
}
