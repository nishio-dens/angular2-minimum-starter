/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
/*
* Platform 
* our providers/directives/pipes
*/
import { PLATFORM_PROVIDERS } from './platform/browser';

/*
* App Component
* our top level component that holds all of our components
*/
import { App } from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    ...PLATFORM_PROVIDERS
  ])
  .catch(err => console.error(err));

}

document.addEventListener('DOMContentLoaded', () => main());
