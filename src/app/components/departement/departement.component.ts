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
  departements: any[] = [
    {
      id: 1,
      nom: 'Informatique',
      description: 'Département dédié à la formation en informatique.',
      filieres: [{ nom: 'Développement Web' }, { nom: 'Réseaux' }],
    },
    {
      id: 2,
      nom: 'Mathématiques',
      description: 'Département de mathématiques appliquées et théoriques.',
      filieres: [{ nom: 'Algèbre' }, { nom: 'Analyse' }],
    },
    {
      id: 3,
      nom: 'Sciences Sociales',
      description: "Département d'études sociales et humaines.",
      filieres: [{ nom: 'Sociologie' }, { nom: 'Psychologie' }],
    },
  ];

  constructor(
    // @Inject(DepartmentService) private departementService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartements();
  }

  loadDepartements(): void {
    // this.departementService.getDepartements().subscribe((data: any[]) => {
    //   this.departements = data;
    // });
  }

  viewDepartement(id: number): void {
    this.router.navigate([`/departements/${id}`]);
  }

  deleteDepartement(id: number): void {
    if (confirm('Voulez-vous supprimer ce département ?')) {
      this.departements = this.departements.filter(
        (departement) => departement.id !== id
      );
    }
  }

  createDepartement(): void {
    this.router.navigate(['/departements/create']);
  }
}
