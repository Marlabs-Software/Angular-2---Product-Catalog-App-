import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { CONFIG } from '../config';

let productsUrl = CONFIG.baseUrls.products;

export interface Product {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
}

@Injectable()
export class ProductService {
  constructor(private _http: Http) { }

  getProducts() {
    var productsList = this._http.get(productsUrl)
      .map((response: Response) => <Product[]>response.json().products);
      return productsList;
  }
  
  addProduct(newProduct:Product){
      alert(newProduct.Name);
//   let body = JSON.stringify(character);
//   return this._http
//     .post('url', body)
//     .map(res => res.json().data)
//     .catch(alert(res));
//     .finally();
  }
  
  getProduct(id: number) {
    return this.getProducts()
      .map(products => products.find(product => product.Id == id));
  }
}
