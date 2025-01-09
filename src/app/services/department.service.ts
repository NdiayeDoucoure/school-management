import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Sector {
  idSector: number;
  nameSector: string;
  acronym: string;
  description: string;
}

interface Department {
  idDepartment: number;
  nameDepartment: string;
  descriptionDepartment: string;
  sectors?: Sector[];
}

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8091/api/departments';

  constructor(private http: HttpClient) {}

  // Récupérer tous les départements (sans filières)
  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}`);
  }

  // Récupérer un département par son ID (avec filières)
  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau département
  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  // Mettre à jour un département existant
  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, department);
  }

  // Supprimer un département
  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
