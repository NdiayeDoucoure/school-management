import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css',
})
export class DepartmentDetailComponent implements OnInit {
  department: any;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID du département :', id);
    this.loadDepartmentDetails(id);
  }

  loadDepartmentDetails(id: number): void {
    this.departmentService.getDepartmentById(id).subscribe(
      (data) => {
        this.department = data;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des détails du département :',
          error
        );
      }
    );
  }
}
