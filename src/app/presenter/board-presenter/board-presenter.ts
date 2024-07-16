import { BOARD_SIZE, CHESS_PIECES } from '../../../shared/const';
import { Player } from '../../../shared/player';
import { render, updateElement } from '../../../shared/render';
import {
  Row,
  Column,
  Position,
  Piece,
  PieceColor,
  PieceType,
  CellStatus,
} from '../../../shared/shared-types';
import { BoardView } from '../../view/board-view/board-view';
import { PieceView } from '../../view/piece-view/piece-view';

export class BoardPresenter {
  private cells: (Piece | null)[][] = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));
  private activeCell: Element | null = null;
  private boardView: BoardView;

  constructor(private container: Element) {
    this.boardView = new BoardView(PieceColor.white);
  }

  init(player1: Player, player2: Player) {
    this.boardView = new BoardView(player1.color);
    render(this.boardView.getElement(), this.container, 'beforeend');

    CHESS_PIECES.forEach((item) => {
      const piece = this.setPiece(item, item.position);
      if (player1.color === piece.color) {
        player1.pieces?.push(piece);
      } else {
        player2.pieces?.push(piece);
      }
    });
  }

  getPiece(position: string | Position): Piece | null {
    const [row, column] = typeof position === 'string' ? this.chessToIndex(position) : position;
    return this.cells[row][column];
  }

  clearCell(position: string): Element {
    const cellElement = document.querySelector('#' + position);
    if (cellElement) {
      cellElement.innerHTML = '';
      const [row, column] = this.chessToIndex(position);
      this.cells[row][column] = null;
      return cellElement;
    } else {
      throw new Error('Can not find position: ' + position);
    }
  }

  setPiece(piece: Piece, position: string) {
    const cellElement = this.clearCell(position);
    const [row, column] = this.chessToIndex(position);
    this.cells[row][column] = piece;
    piece.isAlive = true;
    piece.position = position;
    const pieceView = new PieceView(piece);
    pieceView.getElement().dataset.position = position;
    pieceView.getElement().dataset.type = PieceType[piece.type];
    pieceView.getElement().dataset.color = PieceColor[piece.color];
    render(pieceView.getElement(), cellElement);
    return piece;
  }

  // Конвертация шахматных координат в индексы массива
  chessToIndex(position: string): Position {
    const column = position.charCodeAt(0) - 'a'.charCodeAt(0); // 'a' -> 0, 'b' -> 1, ..., 'h' -> 7
    const row = 8 - parseInt(position[1], 10); // '1' -> 7, '2' -> 6, ..., '8' -> 0
    if (
      row < 0 ||
      row > 7 ||
      column < 0 ||
      column > 7 ||
      position.length !== 2
    ) {
      throw new Error('Incorrect position in chess notation!');
    }
    return [row as Row, column as Column];
  }

  // Конвертация индексов массива в шахматные координаты
  indexToChess([row, column]: Position): string {
    const columnChar = String.fromCharCode('a'.charCodeAt(0) + column); // 0 -> 'a', 1 -> 'b', ..., 7 -> 'h'
    const rowChar = (8 - row).toString(); // 7 -> '1', 6 -> '2', ..., 0 -> '8'
    return `${columnChar}${rowChar}`;
  }

  public markCell(cellId: string, status: CellStatus) {
    const cell = this.boardView.getElement().querySelector(`#${cellId}`);
    if (cell) {
      switch (status) {
        case CellStatus.active:
          this.activeCell?.classList.remove('active');
          cell.classList.add('active');
          this.activeCell = cell;
          break;
        case CellStatus.valid:
          cell.classList.add('valid');
          break;
        case CellStatus.invalid:
          cell.classList.add('invalid');
          break;
        case CellStatus.none:
          cell.classList.forEach((value) => {
            if (value !== 'cell') {
              cell.classList.remove(value);
            }
          });
          this.activeCell === cell ? null : this.activeCell;
          break;
      }
    }
  }
}
