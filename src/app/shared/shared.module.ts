import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoProductsFoundComponent} from './components/no-products-found/no-products-found.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule, FormBuilder} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {OwlModule} from 'ngx-owl-carousel';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {NoAccessComponent} from './components/no-access/no-access.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FireBaseConfig} from '../../environments/firebaseConfig';
import {ProductService} from './services/product.service';
import {AuthGuard} from './services/auth_gaurd';
import {AuthService} from './services/auth.service';
import {NgxContentLoadingModule} from 'ngx-content-loading';
import {CardLoaderComponent} from './components/card-loader/card-loader.component';
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxContentLoadingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    NoProductsFoundComponent,
    NoAccessComponent,
    PageNotFoundComponent,
    CardLoaderComponent,
  ],
  exports: [
    NoProductsFoundComponent,
    FormsModule,
    MDBBootstrapModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    OwlModule,
    AgmCoreModule,
    NoAccessComponent,
    PageNotFoundComponent,
    NgxContentLoadingModule,
    CardLoaderComponent,
  ],
  providers: [AuthService, AuthGuard, ProductService, FormBuilder]
})
export class SharedModule {
}
