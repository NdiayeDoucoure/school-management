import { Component, Inject, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departement',
  imports: [RouterModule, CommonModule],
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.css',
})
export class DepartementComponent implements OnInit {
  departments: any[] = [];
  isLoading = true;

  constructor(
    private departementService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('DepartementComponent initialized');
    this.loadDepartments();
  }

  createDepartement() {
    this.router.navigate(['/departments/create']);
  }

  loadDepartments(): void {
    this.departementService.getAllDepartments().subscribe(
      (data) => {
        this.departments = data;
        this.isLoading = false;
        console.log('Departments loaded:', this.departments);
      },
      (error) => {
        this.isLoading = false;
        console.error(
          'Erreur lors de la récupération des départements :',
          error
        );
      }
    );
  }

  viewDepartement(id: number) {
    this.router.navigate(['/departments', id]);
  }

  deleteDepartement(id: number) {
    this.departementService.deleteDepartment(id).subscribe(
      () => {
        this.departments = this.departments.filter(
          (department) => department.idDepartment !== id
        );
      },
      (error) => {
        console.error('Erreur lors de la suppression du département :', error);
      }
    );
  }
}
