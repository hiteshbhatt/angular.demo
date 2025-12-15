import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from '../customs/custom-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../customs/search.pipe';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-piple-sample',
  standalone: true,
  imports: [
    CommonModule,
    CustomPipePipe,
    FormsModule,
    SearchPipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './pipe-sample.component.html',
  styleUrl: './pipe-sample.component.css',
})
export class PipleSampleComponent {
  product: Product;
  searchInput: string = '';
  products: Product[] = [
    new Product(1, 'Mango', 100),
    new Product(2, 'Banna', 200),
    new Product(3, 'Mango bite', 300),
    new Product(4, 'Banna chips', 400),
    new Product(5, 'Milk', 500),
  ];
  router: Router = inject(Router);
  constructor() {
    // Example usage of the Product class
    this.product = new Product(1, 'Sample Product', 1223);
  }
  redirect() {
    this.router.navigate(['directive', 1, { name: 'hitesh' }], {
      queryParams: { country: 'India', city: 'Delhi' },
    });
  }
}
