import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8091/api/departements';

  constructor(private http: HttpClient) { }

  getDepartements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDepartement(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addDepartement(departement: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, departement);
  }

  deleteDepartement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
