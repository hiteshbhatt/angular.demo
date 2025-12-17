import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listcustomer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listcustomer.component.html',
  styleUrl: './listcustomer.component.css',
})
export class ListcustomerComponent {
  @Input() customers: string[] = [];
  @Output('on-select-customer')
  onSelectCustomer: EventEmitter<string>;
  constructor() {
    this.onSelectCustomer = new EventEmitter<string>();
  }

  onSelect(customer: string): void {
    console.log('Selected customer:', customer);
    this.onSelectCustomer.emit(customer);
  }
}
