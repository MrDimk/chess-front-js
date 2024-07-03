import { Piece, PieceColor } from "./shared-types";

export class Player {
  name: string;
  id: string;
  avatar: string;
  color: PieceColor;
  pieces?: Piece[];

  constructor(name: string, color: PieceColor) {
    // let data = localStorage.getItem(name);
    // if (!data) {
    this.name = name;
    this.avatar = 'default-avatar.png';
    this.id = crypto.randomUUID();
    this.color = color;
    localStorage.setItem(
      name,
      JSON.stringify({
        id: this.id,
        name: this.name,
        avatar: this.avatar,
      })
    );
    // } else {
    //   this.name = JSON.parse(data).name;
    //   this.avatar = JSON.parse(data).avatar;
    //   this.id = JSON.parse(data).id;
    // }
  }

  getName = () => this.name;
  getAvatar = () => this.avatar;
  getId = () => this.id;

  setName = (name: string) => this.name = name;
  setColor = (color: PieceColor) => this.color = color;
}
