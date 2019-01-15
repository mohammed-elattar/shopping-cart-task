import {Component, OnInit} from '@angular/core';
import {Product} from '../../../shared/models/product';
import {AuthService} from '../../../shared/services/auth.service';
import {ProductService} from '../../../shared/services/product.service';
import {NotificationService} from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  loading = false;
  constructor(
    public authService: AuthService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    const x = this.productService.getProducts();
    x.subscribe(
      (product) => {
        this.loading = false;
        // this.spinnerService.hide();
        this.productList = [];
        product.forEach((element) => {
          const y = element;
          y['id'] = element.id;
          this.productList.push(y as Product);
        });
      },
      (err) => {
        this.notificationService.error('Error while fetching Products', err);
      }
    );
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}
