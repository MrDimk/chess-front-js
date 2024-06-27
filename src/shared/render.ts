/**
 * Создает HTML компонент из строки шаблона.
 * @param {string} template - Строка с HTML шаблоном.
 * @return {HTMLElement} - Созданный HTML компонент.
 */
export function createElement(template: string): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = template.trim();
  return div.firstChild as HTMLElement;
}

/**
 * Отрисовывает компонент в заданном контейнере и месте.
 * @param {HTMLElement} component - Компонент для отрисовки.
 * @param {HTMLElement} container - Контейнер, в который будет отрисован компонент.
 * @param {InsertPosition} place - Место отрисовки (beforebegin, afterbegin, beforeend, afterend).
 */
export function render(
  component: HTMLElement,
  container: HTMLElement | Element,
  place: InsertPosition = 'beforeend'
): void {
  container.insertAdjacentElement(place, component);
}

/**
 * Обновляет существующий компонент новым.
 * @param {HTMLElement} oldComponent - Существующий компонент.
 * @param {HTMLElement} newComponent - Новый компонент.
 */
export function updateElement(
  oldComponent: HTMLElement,
  newComponent: HTMLElement
): void {
  if (oldComponent && newComponent) {
    oldComponent.replaceWith(newComponent);
  }
}

/**
 * Удаляет компонент из DOM.
 * @param {HTMLElement} component - Компонент для удаления.
 */
export function removeElement(component: HTMLElement): void {
  if (component && component.parentElement) {
    component.parentElement.removeChild(component);
  }
}
