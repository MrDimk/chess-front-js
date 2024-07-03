import { createElement } from '../../shared/render';
import { AbstractView } from './abstract-view/abstract-view';
import { LogView } from './log-view/log-view';

// const getTemplate ;

export class AppView extends AbstractView {
  log: LogView;

  constructor() {
    super();
    this.log = new LogView();
  }

  getTemplate = () => `
  <div class="app-block app-window">
          ${this.log.getTemplate()}
          <div class="game-block game"></div>
          <div class="chat-block chat"></div>
        </div>
  `
  

  // getElement() {
  //   if (!this.element) {
  //     this.element = createElement(getTemplate());
  //   }

  //   return this.element;
  // }

  // removeElement() {
  //   this.element = null;
  // }
}
