import { Component, inject, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { HttpResponse } from '@angular/common/http';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.css',
})
export class VendorDashboardComponent implements OnInit {
  vendorService: VendorService = inject(VendorService);
  //vendorResponse: HttpResponse<Vendor[]> | undefined;
  vendors: Vendor[] = [];

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.vendors = response.body || [];
        } else {
          alert('Failed to load vendors. Status code: ' + response.status);
        }
      },
      error: (err) => {
        console.error('Error fetching vendors:', err);
      },
    });
  }
  editVendor(arg0: number) {
    throw new Error('Method not implemented.');
  }
  deleteVendor(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
