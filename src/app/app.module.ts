import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {IndexModule} from './index/index.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ProductModule} from './layouts/product/product.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IndexModule,
    ProductModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
