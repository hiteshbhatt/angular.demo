import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
})
export class CustomPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let prefix = args[0] as string;
    let fillChar = args[1] as string;
    return prefix + (value as string).toString().padStart(10, fillChar);
  }
}
