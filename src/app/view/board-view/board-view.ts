import { PieceColor } from '../../../shared/shared-types';
import { AbstractView } from '../abstract-view/abstract-view';

export class BoardView extends AbstractView {
  constructor(private color: PieceColor) {
    super();
  }
  getTemplate = () => {
    let result = '<ul class="chessboard">';
    for (let i = 0; i < 8; i++) {
      const row = this.color === PieceColor.white ? 8 - i : i + 1;
      result =
        result +
        `<li class="chessboard-label row-label row-label__${row}">${row}</li>`;
      for (let j = 0; j < 8; j++) {
        const column =
          this.color === PieceColor.white
            ? String.fromCharCode('a'.charCodeAt(0) + j)
            : String.fromCharCode('h'.charCodeAt(0) - j);
        result = result + `<li id="${column + String(row)}" class="cell"></li>`;
      }
    }
    result = result + `<li class="chessboard-label column-label"></li>`;
    for (let i = 0; i < 8; i++) {
      const column =
        this.color === PieceColor.white
          ? String.fromCharCode('a'.charCodeAt(0) + i)
          : String.fromCharCode('h'.charCodeAt(0) - i);
      result =
        result +
        `<li class="chessboard-label column-label column-label__${column}">${column}</li>`;
    }
    result = result + '</ul>';
    return result;
  };
}
