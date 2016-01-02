import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig, Router, Location, Instruction, ROUTER_DIRECTIVES} from 'angular2/router';

import {HelloComponent} from './hello.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
  <h2>Hello Angular2</h2>

  <router-outlet></router-outlet>
  `,
  directives: [
    CORE_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  { path: '/', component: HelloComponent, name: 'Hello' }
])

export class App {
  constructor(router: Router, location: Location) {}
}
