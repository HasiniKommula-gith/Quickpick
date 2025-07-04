import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockHighlightDirective } from '../StockHighlightDirective.directive';



@Component({
  selector: 'app-product-card',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product; 
  @Output() addToCart = new EventEmitter<Product>();
  
 


  showFullDescription: boolean = false;

  ngOnInit(): void {
    if (this.product) {
      console.log('ProductCard rendered for:', this.product.title);
    } else {
      console.log('ProductCard rendered with undefined product');
    }
  }

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }

  getDisplayDescription(): string {
    if (!this.product || !this.product.description) {
      return 'Description not available';
    }
    if (this.showFullDescription) {
      return this.product.description;
    }
    return this.product.description.slice(0, 60) + '...';
  }

  getToggleButtonText(): string {
    return this.showFullDescription ? 'Show Less' : 'Show More';
  }

  onAddToCart(): void {
    if (this.product) {
      this.addToCart.emit(this.product);
    }
  }
  

}