import { Component, Input } from '@angular/core';

import { Product } from '../products.model'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartItems: Product[] = [];
  removeFromCart(index: number): void {
  this.cartItems.splice(index, 1);
}
}
