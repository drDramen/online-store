import 'normalize.css';
import '@/assets/styles/index.scss';
import { App } from './app/app';

document.documentElement.classList.add('page');
document.body.classList.add('page__body');
const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('no root element');
}

const app = new App(rootElement);

app.create();
