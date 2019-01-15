import {CartProductsComponent} from './cart-products/cart-products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {Routes} from '@angular/router';
import {IndexComponent} from '../../index/index.component';
import {AuthGuard} from '../../shared/services/auth_gaurd';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CheckoutComponent} from './checkout/checkout.component';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'all-products',
        component: ProductListComponent
      },
      {
        path: 'cart-items',
        component: CartProductsComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
