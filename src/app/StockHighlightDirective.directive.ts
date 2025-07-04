import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStockHighlight]',
  standalone: true
})
export class StockHighlightDirective implements OnChanges {
  @Input() stock: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.stock === 0) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f8d7da'); // red for out of stock
      this.renderer.setStyle(this.el.nativeElement, 'color', '#721c24');
    } else if (this.stock < 10) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fff3cd'); // yellow for low stock
      this.renderer.setStyle(this.el.nativeElement, 'color', '#856404');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }

  }
  
}