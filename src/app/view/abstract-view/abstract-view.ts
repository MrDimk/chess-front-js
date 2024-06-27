import { createElement } from '../../../shared/render';
import { Callback } from '../../../shared/shared-types';

/**
 * Абстрактный класс представления
 */
export abstract class AbstractView {
  private element: HTMLElement | null = null;
  private callbacks: Map<string, Callback> = new Map();

  addCallback(key: string, callback: Callback): void {
    this.callbacks.set(key, callback);
  }

  removeCallback(key: string): void {
    this.callbacks.delete(key);
  }

  runCallbacks(): void {
    this.callbacks.forEach((callback) => callback());
  }

  getCallBack = (key: string) => this.callbacks.get(key);

  /**Геттер соответствющего элемента для переключения состояния путем добавления/удаления класса*/
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  /**
   * Геттер для получения разметки элемента
   * @abstract
   * @returns {string} Разметка элемента в виде строки
   */
  abstract getTemplate(): string;

  /** Метод для удаления элемента */
  removeElement() {
    this.element?.remove();
    this.element = null;
  }

  /**Метод для переключения состояния путем добавления/удаления класса*/
  switchState(
    element: HTMLElement,
    switchOn: boolean,
    additionalClass: string
  ) {
    if (switchOn) {
      element.classList.add(additionalClass);
    } else {
      element.classList.remove(additionalClass);
    }
  }
}
