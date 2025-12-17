import { AbstractControl, ValidationErrors } from '@angular/forms';

export function codeValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (control.value && !control.value.startsWith('A')) {
    return { invalidCode: true };
  }
  return null;
}
