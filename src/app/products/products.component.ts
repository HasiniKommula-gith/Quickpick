import { Component } from '@angular/core';


import { Product } from '../products.model';
 
import { CartComponent } from '../cart/cart.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',

  imports: [ CartComponent, ProductCardComponent, FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private service: ProductService) { 
  }
  


  products: Product[] = [];

  

  

  filteredProducts: Product[] = [];
  cartItems: Product[] = [];
  showCart: boolean = false;
  filterStatus: string = 'All';
  searchQuery: string = '';

    ngOnInit() {
    this.service.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filterProducts();

        console.log(this.products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
    
  }

filterProducts(): void {
  this.filteredProducts = this.products.filter(product => {
    const matchesFilter =
      this.filterStatus === 'All' ||
      product.availabilityStatus === this.filterStatus ||
      (this.filterStatus === 'Out of Stock' && product.stock === 0);
    const matchesSearch =
      this.searchQuery === '' ||
      (product.title && product.title.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (product.brand && product.brand.toLowerCase().includes(this.searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });
}

  onFilterChange(status: string): void {
    this.filterStatus = status;
    this.filterProducts();
  }

  onSearchChange(): void {
    this.filterProducts();
  }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    alert('Product is added to cart');
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
}

}
