import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: Product[], ...args: unknown[]): Product[] {
    let searchTerm = args[0] as string;
    if (!searchTerm) {
      return value;
    }
    let result = value.filter((item) => {
      return item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });
    return result;
  }
}
