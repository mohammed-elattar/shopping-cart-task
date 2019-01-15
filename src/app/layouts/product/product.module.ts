// Core Dependencies
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// configuration and services
import {ProductRoutes} from './product.routing';

// Components

import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {SharedModule} from '../../shared/shared.module';
import {CartProductsComponent} from './cart-products/cart-products.component';
import {CartCalculatorComponent} from './cart-calculator/cart-calculator.component';
import {CheckoutComponent} from './checkout/checkout.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ProductRoutes), SharedModule],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartProductsComponent,
    CartCalculatorComponent,
    CheckoutComponent
  ],
  exports: []
})
export class ProductModule {
}
