import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Care } from '../models/care';

@Injectable({
  providedIn: 'root',
})
export class CareService {
  private apiUrl = 'http://localhost:8000/api/cares'; 

  constructor(private http: HttpClient) {}

  getCareRecords(plantId: number): Observable<Care[]> {
    return this.http.get<Care[]>(`${this.apiUrl}/plant/${plantId}`);
  }

  addCareRecord(care: Care): Observable<Care> {
    return this.http.post<Care>(this.apiUrl, care);
  }

  updateCareRecord(id: number, care: Care): Observable<Care> {
    return this.http.put<Care>(`${this.apiUrl}/${id}`, care);
  }

  deleteCareRecord(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
