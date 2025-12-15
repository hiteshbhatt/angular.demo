import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  productName: string = 'Laptop';
  productPrice: number = 1500;

  onClickMe() {
    this.productPrice = 500;
    alert('Button clicked!');
  }
}
