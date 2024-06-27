import './styles.scss';
import './board.scss';
import { AppView } from './app/view/app-view';
import { removeElement, render } from './shared/render';

const container = document.querySelector('#chess-app');
const appView = new AppView()
if (container) {
  render(appView.getElement(), container);
}
