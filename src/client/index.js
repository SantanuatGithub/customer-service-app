import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
//import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
//customElements.define('my-app', buildCustomElementConstructor(MyApp));
