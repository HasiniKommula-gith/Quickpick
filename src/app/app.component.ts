import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'angular19';
  



}
