import { Piece, PieceColor, PieceType } from "../../../shared/shared-types";

// Интерфейс для шахматной фигуры
export class PiecePresenter {

  constructor(
    private type: PieceType,
    private color: PieceColor,
    private position: string,
    private isAlive: boolean = true
  ) {}
};