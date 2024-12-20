import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SetBackground, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product;

  @Input() productListComp: ProductListComponent;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
