import { Routes } from '@angular/router';
import { DepartementComponent } from './components/departement/departement.component';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';

export const routes: Routes = [
  { path: 'departments', component: DepartementComponent },
  { path: 'departments/:id', component: DepartmentDetailComponent },
  { path: 'create', component: DepartmentCreateComponent },
  { path: '', component: HomeComponent },
];
