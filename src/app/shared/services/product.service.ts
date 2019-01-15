import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Product} from '../models/product';
import {AuthService} from './auth.service';
import {NotificationService} from './notification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


/** GET heroes from the server */


@Injectable()
export class ProductService {
  private path = '/item';  // URL to web api

  // NavbarCounts
  navbarCartCount = 0;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.calculateLocalCartProdCounts();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.api_url}/${this.path}`)
      .pipe();
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.api_url}/${this.path}/${id}`)
      .pipe();
  }

  /*
   ----------  Cart Product Function  ----------
  */

  // Adding new Product to cart db if logged in else localStorage
  addToCart(data: Product): void {
    let a: Product[];

    a = JSON.parse(localStorage.getItem('avct_item')) || [];

    a.push(data);
    this.notificationService.wait('Adding Product to Cart', 'Product Adding to the cart');
    setTimeout(() => {
      localStorage.setItem('avct_item', JSON.stringify(a));
      this.calculateLocalCartProdCounts();
    }, 500);
  }

  // Removing cart from local
  removeLocalCartProduct(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products.splice(i, 1);
        break;
      }
    }
    // ReAdding the products after remove
    localStorage.setItem('avct_item', JSON.stringify(products));

    this.calculateLocalCartProdCounts();
  }

  // Fetching Locat CartsProducts
  getLocalCartProducts(): Product[] {
    const products: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];

    return products;
  }

  // returning LocalCarts Product Count
  calculateLocalCartProdCounts() {
    this.navbarCartCount = this.getLocalCartProducts().length;
  }

  emptyCart() {
    localStorage.setItem('avct_item', JSON.stringify([]));
    this.navbarCartCount = 0;
  }


  handleError(error) {
    console.log(error);
  }
}
































