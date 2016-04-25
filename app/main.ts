import { bootstrap } from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));
