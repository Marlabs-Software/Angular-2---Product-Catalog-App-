import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';

import { Product, ProductService } from '../services/product.service';

@Component({
    selector:'add-product',
    templateUrl:'app/templates/add-product.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AddProductComponent implements OnInit{
   constructor(private _productService:ProductService){ } 
   newProduct:Product = <Product>{ };
    
    ngOnInit() {
       
    }
    
    AddProduct(){
        this._productService.addProduct(this.newProduct);
    }        
} 

