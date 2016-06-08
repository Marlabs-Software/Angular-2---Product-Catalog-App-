import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { CONFIG } from '../config';

let productsUrl = CONFIG.baseUrls.products;
let componentsUrl = CONFIG.baseUrls.components;

export interface Product {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
}

export interface UsedComponent {
  Name: string;
  Logo: string;
  ShortDescription: string;
  Description: string;
  URL:string;
}

@Injectable()
export class ProductService {
  constructor(private _http: Http) { }

  getProducts() {
    var productsList = this._http.get(productsUrl)
      .map((response: Response) => <Product[]>response.json().products);
      return productsList;
  }

  getComponents(){
     var componentsList = this._http.get(componentsUrl)
      .map((response: Response) => <UsedComponent[]>response.json().components);
      return componentsList;
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

  getComponentByName(name: string) {
    var data = this.getComponents().map(compdetails => compdetails.find(comp => comp.Name == name));
    return data;
  }
}
