import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <h2>Hello Angular2</h2>
  <router-outlet></router-outlet>
  `,
})

export class App {
  ngOnInit() {
    console.log('Hello Angular2 World');
  }
}
