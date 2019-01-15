import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private productService: ProductService) {
    this.productService.emptyCart();
  }

  ngOnInit() {
  }

}
