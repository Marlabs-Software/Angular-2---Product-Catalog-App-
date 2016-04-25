import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';

import { Product, ProductService } from '../services/product.service';
import { SearchByPropPipe } from '../filters/searchByProp';
import { OrderByPropPipe } from '../filters/orderByProp';

@Component({
  selector: 'product-list',
  pipes:[SearchByPropPipe, OrderByPropPipe],
  templateUrl: './app/templates/product-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  searchText:string = "";
  prop:string = "";
  direction:string = "";

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.prop = "Name"; 
    this.direction = "ASC";
  }
  
  filterBy(_prop:string, _direction:string){
        this.prop = _prop; 
        this.direction = _direction;
  }
}
