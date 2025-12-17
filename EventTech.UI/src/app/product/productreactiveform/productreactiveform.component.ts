import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { codeValidator } from '../../customs/productcode.validator';

@Component({
  selector: 'app-productreactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './productreactiveform.component.html',
  styleUrl: './productreactiveform.component.css',
})
export class ProductreactiveformComponent {
  frm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.frm = this.fb.group({
      // productId: this.fb.control('', [Validators.required]),
      productName: this.fb.control('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
      productCode: this.fb.control('', [codeValidator]),
      productPrice: this.fb.control('', []),
      description: this.fb.group({
        shortDescription: this.fb.control('', []),
        longDescription: this.fb.control('', []),
      }),
      languages: this.fb.array([
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required]),
      ]),
    });

    this.frm.get('productCode')?.valueChanges.subscribe((value) => {
      this.frm.get('productPrice')?.clearValidators();
      if (value && value.indexOf('A') != -1) {
        this.frm.get('productPrice')?.addValidators([Validators.required]);
        this.frm.get('productPrice')?.updateValueAndValidity();
      }
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      console.log('Product Data:', this.frm.value);
      alert('Product added successfully!');
    }
  }
  enableValidation() {
    // This method can be used to enable validation if needed
    // Currently, the form is set up to validate on submit
    let productCodeControl = this.frm.get('productCode');
    productCodeControl?.addValidators(Validators.required);
    productCodeControl?.updateValueAndValidity();
  }

  reset() {
    this.frm.reset({
      productId: 1,
    });
  }

  update() {
    this.frm.setValue({
      productName: 'Updated Product',
      productCode: 'UPD123',
      productPrice: 100,
      description: {
        shortDescription: 'Updated Short Description',
        longDescription: 'Updated Long Description',
      },
    });
  }

  patch() {
    this.frm.patchValue({
      productName: 'Patched Product',
      productCode: 'PAT123',
      description: {
        shortDescription: 'Patched Short Description',
      },
    });
  }
  addLanguage() {
    this.languages.push(this.fb.control('', [Validators.required]));
  }
  get languages(): FormArray {
    return <FormArray>this.frm.get('languages');
  }
}
