import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';

import { Product, UsedComponent, ProductService } from '../services/product.service';
import { SearchByPropPipe } from '../filters/searchByProp';

@Component({
  selector: 'component-list',
  pipes:[SearchByPropPipe],
  templateUrl: './app/templates/component-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ComponentListComponent implements OnInit {
  usedComponents: Observable<UsedComponent[]>;
  searchText:string = "";
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.usedComponents = this._productService.getComponents();
  }
}
