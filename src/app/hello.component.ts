import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  Hello I'm Angular2.
  `
})

export class HelloComponent {
  ngOnInit() {
    console.log('Hello Angular2 Component!');
  }
}
