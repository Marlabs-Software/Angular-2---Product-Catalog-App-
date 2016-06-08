import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';
import { Observable } from 'rxjs/Rx';

import { Product, UsedComponent, ProductService } from '../services/product.service';

@Component({
  selector: 'component-details',
  templateUrl: './app/templates/component-details.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ComponentDetailsComponent implements OnInit {
  //CompDetails:Observable<UsedComponent>;
  name:string;
  errorMessage:string;

  constructor(private _productService: ProductService, params: RouteParams, _router: Router) { 
      this.name = params.get('name');
      if(this.name == "" || this.name == undefined){
          _router.navigate(['UsedComponents']);
      }
  }

  ngOnInit() {
      this._productService.getComponentByName(this.name)
                     .subscribe(
                       res => JsonToObject(res),
                       error =>  this.errorMessage = <any>error);
  }

  function JsonToObject(data) {
      this.CompDetails = { Name:data.Name, Logo:data.Logo };
  } 
}
