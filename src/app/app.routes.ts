import { Routes } from '@angular/router';
import { DepartementComponent } from './components/departement/departement.component';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';

export const routes: Routes = [
  { path: 'departments', component: DepartementComponent },
  { path: 'departments/:id', component: DepartmentDetailComponent },
  { path: '', component: HomeComponent },
];
