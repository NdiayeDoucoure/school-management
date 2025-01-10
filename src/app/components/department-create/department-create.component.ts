import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-create',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.css',
})
export class DepartmentCreateComponent {
  department: any = {
    nameDepartment: '',
    descriptionDepartment: '',
    sectors: [
      {
        nameSector: '',
        acronym: '',
        description: '',
      },
    ],
  };

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  addSector(): void {
    this.department.sectors.push({
      nameSector: '',
      acronym: '',
      description: '',
    });
  }

  removeSector(index: number): void {
    this.department.sectors.splice(index, 1);
  }

  onSubmit(): void {
    this.departmentService.createDepartment(this.department).subscribe(
      (response) => {
        console.log('Département créé avec succès :', response);
        this.router.navigate(['/departments']);
      },
      (error) => {
        console.error('Erreur lors de la création du département :', error);
      }
    );
  }
}
