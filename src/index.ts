import './styles.scss';
import './board.scss';
import { AppView } from './app/view/app-view';
import { removeElement, render } from './shared/render';
import { LogView } from './app/view/log-view/log-view';
import { GamePresenter } from './app/presenter/game-presenter/game-presenter';

const logContainer = document.querySelector('.log-block');
const gameContainer = document.querySelector('.game-block');
const chatContainer = document.querySelector('.chat-block');
const log = new LogView();

if (logContainer) {
  render(log.getElement(), logContainer);
}

if (gameContainer) {
  const game = new GamePresenter(gameContainer);
  game.start();
}

if (logContainer) {
  render(log.getElement(), logContainer);
}
