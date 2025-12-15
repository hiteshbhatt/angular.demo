import { Routes } from '@angular/router';
import { FirstsampleComponent } from './firstsample/firstsample.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipleSampleComponent } from './pipe-sample/pipe-sample.component';
import { Component } from '@angular/core';
import { Pipechild1Component } from './pipe-sample/pipechild1/pipechild1.component';
import { Pipechild2Component } from './pipe-sample/pipechild2/pipechild2.component';
import { AddcustomerComponent } from './customers/addcustomer/addcustomer.component';
import { ProjectionComponent } from './projection/projection.component';

export const routes: Routes = [
  { path: 'home', component: FirstsampleComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'directive/:id?', component: DirectiveSampleComponent },
  {
    path: 'pipe',
    component: PipleSampleComponent,
    children: [
      { path: 'pipechild1', component: Pipechild1Component },
      { path: 'pipechild2', component: Pipechild2Component },
    ],
  },
  { path: 'datasharing', component: AddcustomerComponent },
  { path: 'projection', component: ProjectionComponent },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./student/student.component').then((m) => m.StudentComponent),
  },
  {
    path: 'template-driven',
    loadComponent: () =>
      import(
        './product/product-template-driven/product-template-driven.component'
      ).then((m) => m.ProductTemplateDrivenComponent),
  },
  {
    path: 'reactive-form',
    loadComponent: () =>
      import(
        './product/productreactiveform/productreactiveform.component'
      ).then((m) => m.ProductreactiveformComponent),
  },
  { path: '**', redirectTo: 'home' },
];
