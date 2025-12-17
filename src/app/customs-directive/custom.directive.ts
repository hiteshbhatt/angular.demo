import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective {
  @Input() color!: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseout')
  mouseOut() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}
