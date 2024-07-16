export type Callback = () => void;

// Тип для строки (rank) и колонки (file)
export type Row = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

// Тип для позиции на доске
export type Position = [Row, Column];

// Перечисления для типа и цвета фигуры
export enum PieceType {
  king = 'king',
  queen = 'queen',
  rook = 'rook',
  bishop = 'bishop',
  knight = 'knight',
  pawn = 'pawn',
}

export enum PieceColor {
  white = 'white',
  black = 'black'
}

export enum GameStatus {
  Initializing,
  WhiteTurn,
  BlackTurn,
  Check,
  Checkmate,
  Stalemate,
  Finished,
}

export enum GameMode {
  Local, // two players offline
  WithBot,
  Online, // two players online
  OnlineBot,
}

export enum CellStatus {
  none,
  active, // marks cell with active piece
  valid, // marks cells avalible to move on
  invalid,
}

export type Piece = {
  color: PieceColor;
  type: PieceType;
  moved?: boolean;
  isAlive?: boolean;
  position: string;
};

export type Move = {
  valid: boolean;
  targetPiece: Piece | null;
  targetPosition: string;
  activePiece: Piece;
  castling: {rook: Piece, targetPosition: string} | null;
}