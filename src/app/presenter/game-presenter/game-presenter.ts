import { CHESS_PIECES } from '../../../shared/const';
import { Player } from '../../../shared/player';
import {
  CellStatus,
  GameMode,
  GameStatus,
  Move,
  Piece,
  PieceColor,
  PieceType,
  Position,
} from '../../../shared/shared-types';
import { BoardPresenter } from '../board-presenter/board-presenter';

export class GamePresenter {
  private player1: Player;
  private player2: Player;
  private board: BoardPresenter;
  private status: GameStatus;
  private mode: GameMode;
  private activePlayer: Player | null = null;
  private activePiece: Piece | null = null;
  private allPieces: Piece[] = [];
  private validMoves: Move[] = [];
  private underCheckListener:
    | ((from: Piece, underCheck: Piece) => void)
    | null = null;

  constructor(private container: Element, mode: GameMode = GameMode.Local) {
    this.status = GameStatus.Initializing;
    this.mode = mode;
    this.board = new BoardPresenter(container);
    this.player1 = new Player('Player1', PieceColor.white);
    this.player2 = new Player('Player2', PieceColor.black);

    CHESS_PIECES.forEach((item) => {
      this.allPieces.push({
        color: item.color,
        type: item.type,
        position: item.position,
        isAlive: true,
        moved: false,
      });
    });

    this.board.init(this.player1, this.player2);
    this.container.addEventListener('click', this.clickHandler);
  }

  start() {
    if (this.status === GameStatus.Initializing) {
      this.status = GameStatus.WhiteTurn;
      this.activePlayer =
        this.player1.color === PieceColor.white ? this.player1 : this.player2;
    }
  }

  nextMove() {
    this.activePiece = null;
    this.validMoves.forEach((move) => {
      this.board.markCell(move.targetPosition, CellStatus.none);
    });
    this.validMoves = [];

    console.log(
      'do ',
      this.activePlayer?.getName(),
      ' provide check? - ',
      this.isUnderCheck()
    );

    this.activePlayer =
      this.activePlayer === this.player1 ? this.player2 : this.player1;
  }

  clickHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (this.activePlayer && target) {
      // Click on players piece to choose it
      if (
        target.classList.contains('figure') &&
        target.dataset.color === PieceColor[this.activePlayer?.color] &&
        target.dataset.position &&
        target.dataset.type
      ) {
        this.activePiece = this.getPiece(
          target.dataset.color,
          target.dataset.type,
          target.dataset.position
        );
        if (this.validMoves.length > 0) {
          this.validMoves.forEach((move) => {
            this.board.markCell(move.targetPosition, CellStatus.none);
          });
          this.validMoves = [];
        }
        this.validMoves = this.getPieceMovesArray(this.activePiece);
        this.validMoves.forEach((move) => {

          console.log(this.isUnderCheck(this.activePlayer === this.player1 ? this.player2 : this.player1));

          this.board.markCell(move.targetPosition, CellStatus.valid);
        });
        this.board.markCell(target.dataset.position, CellStatus.active);
      }

      // Click on enemys piece to attack it
      if (
        target.classList.contains('figure') &&
        target.dataset.position &&
        this.activePiece &&
        this.activePiece.position &&
        this.validMoves.find(
          (move) => move.targetPosition === target.dataset.position
        )
      ) {
        const pieceUnderAttack = this.allPieces.find(
          (piece) =>
            piece.color === target.dataset.color &&
            piece.type === target.dataset.type &&
            piece.position === target.dataset.position
        );
        if (!pieceUnderAttack) throw new Error('Cant find piece under attack');
        pieceUnderAttack.isAlive = false;
        this.board.clearCell(target.dataset.position);
        this.board.clearCell(this.activePiece.position);
        this.activePiece.position = target.dataset.position;
        this.board.setPiece(this.activePiece, target.dataset.position);
        this.activePiece.moved = true;
        this.nextMove();
      }

      // Click on cell to move
      if (
        target.classList.contains('cell') &&
        !target.innerHTML &&
        this.activePiece?.position &&
        this.validMoves.find((move) => move.targetPosition === target.id)
      ) {
        this.board.markCell(this.activePiece.position, CellStatus.none);
        this.board.clearCell(this.activePiece.position);

        this.board.setPiece(this.activePiece, target.id);
        this.activePiece.moved = true;

        // const underCheck = this.isUnderCheck(
        //   this.activePlayer === this.player1 ? this.player2 : this.player1
        // );
        // console.log(underCheck);
        // if (!underCheck) 
          this.nextMove();
      }
    }
  };

  getPiece(
    color: string | PieceColor,
    type: string | PieceType,
    position: string
  ): Piece {
    const result = this.allPieces.find(
      (piece) =>
        piece.color === color &&
        piece.type === type &&
        piece.position === position
    );
    if (!result) throw new Error('Undefined piece');
    return result;
  }

  getPieceMovesArray(piece: Piece): Move[] {
    if (!piece.position) throw new Error('Piece position is undefined');
    const resultArray: Move[] = [];
    const direction = piece.color === PieceColor.white ? -1 : 1;
    const position = this.board.chessToIndex(piece.position);

    let [row, column] = position;
    let stop = false;
    // let move = this.checkMove(row, column);

    switch (piece.type) {
      /////////// Pown move rools
      case PieceType.pawn:
        // 1 step forward
        row = row + direction;
        let move = this.validateMove(row, column, piece);
        if (move.valid && !move.targetPiece) resultArray.push(move);

        if (!piece.moved) {
          row = row + direction;
          move = this.validateMove(row, column, piece);
          if (move.valid && !move.targetPiece) resultArray.push(move);
        }

        /////////// Pown attack rules
        [row, column] = position;
        row = row + direction;
        column = column - 1;
        move = this.validateMove(row, column, piece);
        if (move.valid && move.targetPiece) {
          resultArray.push(move);
        }

        [row, column] = position;
        row = row + direction;
        column = column + 1;
        move = this.validateMove(row, column, piece);
        if (move.valid && move.targetPiece) {
          resultArray.push(move);
        }

        break;

      // Rook rules
      case PieceType.rook:
        [row, column] = position;
        stop = false;
        //Going forward
        console.log(row, column);
        console.log('Going forward');
        while (!stop && row >= 0 && row < 8) {
          row = row + direction;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }
        stop = false;

        //Going backward
        console.log('Going back');
        console.log(row, column);
        [row, column] = position;
        while (!stop && row >= 0 && row < 8) {
          row = row - direction;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }
        stop = false;

        //Going left
        [row, column] = position;
        console.log('Going left');
        console.log(row, column);
        while (!stop && column >= 0 && column < 8) {
          column--;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }
        stop = false;

        //Going right
        console.log('Going right');
        [row, column] = position;
        console.log(row, column);
        while (!stop && column >= 0 && column < 8) {
          column++;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }
        stop = false;
        break;

      // Rook rules
      case PieceType.bishop:
        //To forward-right
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row + direction;
          column++;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //To backward-right
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row - direction;
          column++;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //To backward-left
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row - direction;
          column--;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //To forward-left
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row + direction;
          column--;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        break;

      // Knight rules
      case PieceType.knight:
        //1
        [row, column] = position;
        row = row + direction * 2;
        column++;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //2
        [row, column] = position;
        row = row + direction;
        column = column + 2;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //3
        [row, column] = position;
        row = row - direction;
        column = column + 2;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //4
        [row, column] = position;
        row = row - direction * 2;
        column++;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //5
        [row, column] = position;
        row = row - direction * 2;
        column--;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //6
        [row, column] = position;
        row = row - direction;
        column = column - 2;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //7
        [row, column] = position;
        row = row + direction;
        column = column - 2;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        //8
        [row, column] = position;
        row = row + direction * 2;
        column--;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);
        break;

      // Queen rules
      case PieceType.queen:
        //direction - 12h
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row + direction;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 1.5h
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row + direction;
          column++;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 3h
        [row, column] = position;
        stop = false;
        while (!stop) {
          column++;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 4.5h
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row - direction;
          column++;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 6h
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row - direction;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 7.5h
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row - direction;
          column--;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 9h
        [row, column] = position;
        stop = false;
        while (!stop) {
          column--;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        //direction - 10.5h
        [row, column] = position;
        stop = false;
        while (!stop) {
          row = row + direction;
          column--;
          move = this.validateMove(row, column, piece);
          if (move.valid) resultArray.push(move);
          if (!move.valid || move.targetPiece) stop = true;
        }

        break;

      // King rules
      case PieceType.king:
        [row, column] = position;
        row = row + direction;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        row = row + direction;
        column++;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        column++;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        row = row - direction;
        column++;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        row = row - direction;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        row = row - direction;
        column--;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        column--;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        [row, column] = position;
        row = row + direction;
        column--;
        move = this.validateMove(row, column, piece);
        if (move.valid) resultArray.push(move);

        // castling king with rook
        // if (!this.activePiece?.moved && !this.activePlayer?.didCastling) {
        //   [row, column] = position;
        //   stop = false;
        //   const castlingPieces = this.allPieces.filter(
        //     (piece) =>
        //       piece.color === this.activePlayer?.color &&
        //       piece.type === PieceType.rook &&
        //       !piece.moved
        //   );
        //   castlingPieces.forEach((rook) => {
        //     let [, rookColumn] = this.board.chessToIndex(rook.position);
        //     let step = rookColumn === 7 ? 1 : -1;
        //     for (let i = column; column < 7 && column > 0 && !stop; column + step) {
        //       if (this.board.getPiece([row, i] as Position)) stop = true;
        //     }
        //     if (!stop) {
        //       move = this.validateMove(row, column + step + step);
        //       move.castling = {
        //         rook,
        //         targetPosition: this.board.indexToChess([
        //           row,
        //           column + step,
        //         ] as Position),
        //       };
        //     resultArray.push(move);
        //     }
        //   });

        //   if (castlingPieces.length > 0) {
        //     while (!stop) {
        //       column--;
        //       move = this.validateMove(row, column, piece);
        //       if (move.valid) resultArray.push(move);
        //       if (!move.valid || move.targetPiece) stop = true;
        //     }
        //   }
        // }

        break;
    }

    return resultArray;
  }

  private validateMove(row: number, column: number, piece: Piece): Move {
    let valid = true;
    let activePiece = piece;
    let targetPiece: Piece | null = null;
    let targetPosition: string = '';
    let isCheck = false;
    let castling = null;
    if (row < 0 || row > 7 || column < 0 || column > 7) {
      valid = false;
    } else {
      targetPosition = this.board.indexToChess([row, column] as Position);
      targetPiece = this.board.getPiece(targetPosition);
    }
    if (targetPiece?.color === piece.color) {
      valid = false;
    } else {
      if (targetPiece?.type === PieceType.king) {
        valid = false;
        if (targetPiece.color !== piece.color && this.underCheckListener) {
          this.underCheckListener(piece, targetPiece);
        }
      }
    }

    return { valid, targetPiece, targetPosition, activePiece, castling };
  }

  private isUnderCheck(player: Player | null = this.activePlayer) {
    let result = false;
    this.underCheckListener = (from, underCheck) => {
      console.log(from, ' attack - ', underCheck);
      result = true;
    };

    this.allPieces
      .filter((piece) => piece.isAlive && piece.color === player?.color)
      .forEach((piece) => this.getPieceMovesArray(piece));

    this.underCheckListener = null;
    return result;
  }

  private isUnderAttack(
    position: string,
    playerUnderAttack: Player | null = this.activePlayer
  ) {}
}
