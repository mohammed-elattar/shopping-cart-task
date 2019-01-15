import {Product} from '../../../shared/models/product';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../shared/services/product.service';
import {NotificationService} from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {
    this.product = new Product();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const id:number = params['id']; // (+) converts string 'id' to a number
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: number) {
    // this.spinnerService.show();
    const x = this.productService.getProductById(id);
    x.subscribe(
      (product) => {
        // this.spinnerService.hide();
        const y = product as Product;

        y['id'] = id;
        this.product = y;
      },
      (error) => {
        this.notificationService.error('Error while fetching Product Detail', error);
      }
    );
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
