import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { CustomDirective } from '../customs-directive/custom.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive-sample',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomDirective],
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css',
})
export class DirectiveSampleComponent {
  selectedColor: string = 'black';
  id: string = '';
  num: number = 0;
  colors: string[] = ['red', 'green', 'blue', 'yellow', 'orange'];
  products: Product[] = [
    new Product(1, 'Laptop', 1500),
    new Product(2, 'Smartphone', 800),
    new Product(3, 'Tablet', 600),
    new Product(4, 'Smartwatch', 300),
    new Product(5, 'Headphones', 150),
    new Product(6, 'Monitor', 400),
  ];
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  country: string = '';
  city: string = '';
  constructor() {
    this.num = Math.floor(Math.random() * 100);
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
    });
    this.activatedRoute.queryParams.subscribe((data) => {
      this.country = data['country'];
      this.city = data['city'];
    });
  }
}
