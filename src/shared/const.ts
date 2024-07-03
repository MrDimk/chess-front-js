import { PieceColor, PieceType } from "./shared-types";

export const BOARD_SIZE = 8;

export const START_POSITION = [
  {piece: {type: PieceType.rook, color: PieceColor.white}, position: 'a1'},
  {piece: {type: PieceType.knight, color: PieceColor.white}, position: 'b1'},
  {piece: {type: PieceType.bishop, color: PieceColor.white}, position: 'c1'},
  {piece: {type: PieceType.queen, color: PieceColor.white}, position: 'd1'},
  {piece: {type: PieceType.king, color: PieceColor.white}, position: 'e1'},
  {piece: {type: PieceType.bishop, color: PieceColor.white}, position: 'f1'},
  {piece: {type: PieceType.knight, color: PieceColor.white}, position: 'g1'},
  {piece: {type: PieceType.rook, color: PieceColor.white}, position: 'h1'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'a2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'b2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'c2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'd2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'e2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'f2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'g2'},
  {piece: {type: PieceType.pawn, color: PieceColor.white}, position: 'h2'},

  {piece: {type: PieceType.rook, color: PieceColor.black}, position: 'a8'},
  {piece: {type: PieceType.knight, color: PieceColor.black}, position: 'b8'},
  {piece: {type: PieceType.bishop, color: PieceColor.black}, position: 'c8'},
  {piece: {type: PieceType.queen, color: PieceColor.black}, position: 'd8'},
  {piece: {type: PieceType.king, color: PieceColor.black}, position: 'e8'},
  {piece: {type: PieceType.bishop, color: PieceColor.black}, position: 'f8'},
  {piece: {type: PieceType.knight, color: PieceColor.black}, position: 'g8'},
  {piece: {type: PieceType.rook, color: PieceColor.black}, position: 'h8'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'a7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'b7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'c7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'd7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'e7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'f7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'g7'},
  {piece: {type: PieceType.pawn, color: PieceColor.black}, position: 'h7'}
];