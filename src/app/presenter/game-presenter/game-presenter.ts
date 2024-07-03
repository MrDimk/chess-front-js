import { Player } from '../../../shared/player';
import { GameStatus, PieceColor } from '../../../shared/shared-types';
import { BoardPresenter } from '../board-presenter/board-presenter';

export class GamePresenter {
  private player1: Player;
  private player2: Player;
  private board: BoardPresenter;
  private status: GameStatus;

  constructor(private container: Element) {
    this.status = GameStatus.Initializing;
    this.board = new BoardPresenter(container);
    this.player1 = new Player('Bob', PieceColor.white);
    this.player2 = new Player('Sam', PieceColor.black);
    this.board.init(this.player1, this.player2);
    this.container.addEventListener('click', this.clickHandler);
  }

  start() {
    return '';
  }

  makeMove() {
    if (
      this.status === GameStatus.BlackTurn ||
      this.status === GameStatus.Initializing
    ) {
      this.status = GameStatus.WhiteTurn;
      const currentMovePlayer =
        this.player1.color === PieceColor.white ? this.player1 : this.player2;
    }
  }

  clickHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    console.log(target);
    if (target && target.classList.contains('cell')) {
      console.log('Click on cell - ', target.id);
    }
    if (
      target &&
      target.classList.contains('figure')
    ) {
      console.log(
        'Click on - ',
        target.classList.toString()
      );
    }
  };
}
