import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../Interfaces/unit-response/units-response.interface';
import { Location } from '../Interfaces/unit-response/location.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitService {
  private readonly APIUrl: string = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);

  private allUnits$: Observable<Location[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Location[] = [];

  constructor(private readonly _httpClient: HttpClient) { this._httpClient.get<UnitsResponse>(this.APIUrl).subscribe(data => {
    this.allUnitsSubject.next(data.locations);
    this.filteredUnits = data.locations
  }) }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$
  }

  getFilteredUnits(){
    return this.filteredUnits
  }

  setFilteredUnits(value: Location[]) {
    this.filteredUnits = value;
  }
}
