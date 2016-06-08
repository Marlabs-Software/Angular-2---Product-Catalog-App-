import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import { ComponentListComponent } from './components/component-list.component';
import { ComponentDetailsComponent } from './components/component-details.component';
import { ProductListComponent } from './components/product-list.component';
import { AddProductComponent } from './components/Add-Product.component';
import { ProductService } from './services/product.service';
import { CONFIG } from './config';

@Component({
  selector: 'product-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ProductService
  ]
})
@RouteConfig([
  { path: '/components', name: 'UsedComponents', component: ComponentListComponent, useAsDefault: true },
  { path: '/component-view/:name', name: 'ComponentDetails', component: ComponentDetailsComponent },
  { path: '/products', name: 'Products', component: ProductListComponent },
  { path: '/add-product', name: 'AddProduct', component: AddProductComponent }
  ])
export class AppComponent { }
