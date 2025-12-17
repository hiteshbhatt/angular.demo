import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-template-driven.component.html',
  styleUrl: './product-template-driven.component.css',
})
export class ProductTemplateDrivenComponent {
  enableValidation() {
    // This method can be used to enable validation if needed
    // Currently, the form is set up to validate on submit
  }
  onSubmit(productForm: NgForm) {
    alert('Product added successfully!');
    console.log('Product Data:', productForm.value);
  }
  product: Product = new Product();
}
