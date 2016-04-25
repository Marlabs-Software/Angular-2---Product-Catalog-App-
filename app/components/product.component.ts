import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'story-character',
  templateUrl: 'app/templates/product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private _productService: ProductService,
    private _routeParams: RouteParams,
    private _router: Router) { }

  ngOnInit() {
    if (!this.product) {
      let id = +this._routeParams.get('id');
      this._productService.getProduct(id)
        .subscribe(character => this._setEditCharacter(product));
    }
  }

  private _gotoProducts() {
    let route = ['Products', { id: this.product ? this.product.id : null }]
    this._router.navigate(route);
  }

  private _setEditCharacter(product: Product) {
    if (product) {
      this.product = product;
    } else {
      this._gotoProducts();
    }
  }
}
