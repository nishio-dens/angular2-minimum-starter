import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {provide, enableProdMode} from 'angular2/core';
import {
  ROUTER_PRIMARY_COMPONENT,
  APP_BASE_HREF,
  ROUTER_PROVIDERS as NG2_ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

import {App} from './app/app';

const ROUTER_PROVIDERS: Array<any> = [
  NG2_ROUTER_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {
    useValue: App
  }),
  provide(LocationStrategy, {
    useClass: HashLocationStrategy
  }),
  provide(APP_BASE_HREF, {
    useValue: '/'
  })
];

// These are dependencies of our App
const APP_PROVIDERS: Array<any> = [
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  ROUTER_PROVIDERS
];

bootstrap(App, APP_PROVIDERS);
