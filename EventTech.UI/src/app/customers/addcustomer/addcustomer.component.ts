import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListcustomerComponent } from '../listcustomer/listcustomer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [FormsModule, ListcustomerComponent, CommonModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css',
})
export class AddcustomerComponent {
  customer: string = '';
  customers: string[] = [];
  selectedCustomer: string | null = null;
  @ViewChild('listCustomer') listCustomerComponent!: ListcustomerComponent;
  @ViewChild('alertaddelement') successAlert: ElementRef;
  /**
   *
   */
  constructor() {
    this.successAlert = new ElementRef(null);
  }

  addCustomer(): void {
    this.customers.push(this.customer);
    this.listCustomerComponent.customers.push(this.customer);
    this.successAlert.nativeElement.innerText = `Customer <strong>${this.customer}</strong> added successfully!`;
    setTimeout(() => {
      this.successAlert.nativeElement.innerText = '';
    }, 3000);
    this.customer = '';
    // Here you would typically send the customer data to a server
    // For now, we just log it to the console
  }

  onSelectCustomer($event: string) {
    // this.selectedCustomer = $event;
  }
}
