export type Callback = () => void;

// Тип для строки (rank) и колонки (file)
export type Row = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

// Тип для позиции на доске
export type Position = [Row, Column];

// Перечисления для типа и цвета фигуры
export enum PieceType {
  king,
  queen,
  rook,
  bishop,
  knight,
  pawn,
}

export enum PieceColor {
  white,
  black,
}

// Интерфейс для шахматной фигуры
export type Piece = {
  type: PieceType;
  color: PieceColor;
  position?: string;
  isAlive?: boolean;
};

export enum GameStatus {
  Initializing,
  WhiteTurn,
  BlackTurn,
  Check,
  Checkmate,
  Stalemate,
  Finished,
}
