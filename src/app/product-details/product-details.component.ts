import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product!: IProduct;

  addToCart(product: IProduct) {}

    getImageUrl(product: IProduct) {
    if (product === null) {
      return '';
    }
    return `assets/images/robot-parts/` + product.imageName;
  }

    getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return ['strikethrough'];
      else return [];
  }

}
