import { Piece, PieceColor, PieceType } from '../../../shared/shared-types';
import { AbstractView } from '../abstract-view/abstract-view';
import './piece-view.scss';

const PieceSVG = {
  [PieceType.king]: {
    [PieceColor.white]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path stroke-linejoin="miter" d="M23 12V6m-3 2h5"/>
    <path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M23 25s4-7 3-10c0 0-1-3-3-3s-3 3-3 3c-2 3 3 10 3 10"/>
    <path fill="#fff" d="M13 37c5 4 14 4 20 0v-7s9-4 6-10c-4-7-14-4-16 4v3-3c-3-8-12-11-16-4-3 6 6 10 6 10v7"/>
    <path d="M13 30c5-3 14-3 20 0m-20 4c5-3 14-3 20 0m-20 3c5-3 14-3 20 0"/>
  </g>
</svg>
    `,
    [PieceColor.black]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path stroke-linejoin="miter" d="M23 12V6"/>
    <path fill="#000" stroke-linecap="butt" stroke-linejoin="miter" d="M23 25s4-7 3-10c0 0-1-3-3-3s-3 3-3 3c-2 3 3 10 3 10"/>
    <path fill="#000" d="M13 37c5 4 14 4 20 0v-7s9-4 6-10c-4-7-14-4-16 4v3-3c-3-8-12-11-16-4-3 6 6 10 6 10v7"/>
    <path stroke-linejoin="miter" d="M20 8h5"/>
    <path stroke="#fff" d="M32 30s9-4 6-10c-4-6-13-2-15 5v2-2c-3-7-12-11-16-5-2 6 6 10 6 10"/>
    <path stroke="#fff" d="M13 30c5-3 14-3 20 0m-20 4c5-3 14-3 20 0m-20 3c5-3 14-3 20 0"/>
  </g>
</svg>
    `,
  },
  [PieceType.queen]: {
    [PieceColor.white]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="#fff" stroke="#000" stroke-linejoin="round" stroke-width="1.5">
    <path d="M9 26h27l3-12-8 11V11l-5 14-3-15-3 15-6-14v14L7 14l2 12zm0 0c0 2 2 2 3 4v4l-1 2v3h23s2-1 0-3c0 0 1-1-1-2l1-4 2-4H9z"/>
    <path fill="none" d="M12 30h22m-22 4h21"/>
    <circle cx="6" cy="12" r="2"/>
    <circle cx="14" cy="9" r="2"/>
    <circle cx="22.5" cy="8" r="2"/>
    <circle cx="31" cy="9" r="2"/>
    <circle cx="39" cy="12" r="2"/>
  </g>
</svg>
    `,
    [PieceColor.black]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path stroke-linecap="butt" d="M9 26h27l3-12-8 11V11l-5 14-3-15-3 15-6-14v14L7 14l2 12z"/>
    <path d="M9 26c0 2 2 2 3 4v4l-1 2v3h23s2-1 0-3c0 0 1-1-1-2l1-4 2-4H9zm3 4h22m-22 4h21"/>
    <circle cx="6" cy="12" r="2"/>
    <circle cx="14" cy="9" r="2"/>
    <circle cx="22.5" cy="8" r="2"/>
    <circle cx="31" cy="9" r="2"/>
    <circle cx="39" cy="12" r="2"/>
    <path fill="none" stroke-linecap="butt" d="M11 39a35 35 1 0 0 23 0"/>
    <path fill="none" stroke="#fff" d="M11 29a35 35 1 0 1 23 0m-21 3h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0"/>
  </g>
</svg>
    `,
  },
  [PieceType.rook]: {
    [PieceColor.white]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path stroke-linecap="butt" d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/>
    <path d="m34 14-3 3H14l-3-3"/>
    <path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v13H14V17"/>
    <path d="m31 30 2 2H13l1-2"/>
    <path fill="none" stroke-linejoin="miter" d="M11 14h23"/>
  </g>
</svg>
    `,
    [PieceColor.black]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path stroke-linecap="butt" d="M9 39h27v-3H9v3zm4-7 1-2h17l2 2H13zm-1 4v-4h21v4H12z"/>
    <path stroke-linecap="butt" stroke-linejoin="miter" d="M14 30V17h17v13H14z"/>
    <path stroke-linecap="butt" d="m14 17-3-3h23l-3 3H14zm-3-3V9h4v2h5V9h5v2h5V9h4v5H11z"/>
    <path fill="none" stroke="#fff" stroke-linejoin="miter" stroke-width="1" d="M12 36h21m-20-4h19m-18-2h17M14 17h17m-20-3h23"/>
  </g>
</svg>
    `,
  },
  [PieceType.bishop]: {
    [PieceColor.white]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <g fill="#fff" stroke-linecap="butt">
      <path d="M9 37c3-1 10 0 14-2 3 2 10 1 13 2 0 0 2 0 3 2h-3c-3-1-10 1-13-1-4 2-11 0-14 1H6c1-2 3-2 3-2zm6-4c3 2 13 2 15 0v-2c0-3-2-4-2-4 5-2 6-12-5-16-11 4-11 14-5 16 0 0-3 1-3 4v2z"/>
      <path d="M25 9a3 3 0 1 1-5 0 3 3 0 1 1 5 0z"/>
    </g>
    <path stroke-linejoin="miter" d="M18 27h10m-13 4h15m-7-15v5m-3-2h5"/>
  </g>
</svg>
    `,
    [PieceColor.black]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <g fill="#000" stroke-linecap="butt">
      <path d="M9 37c3-1 10 0 14-2 3 2 10 1 13 2 0 0 2 0 3 2h-3c-3-1-10 1-13-1-4 2-11 0-14 1H6c1-2 3-2 3-2zm6-4c3 2 13 2 15 0v-2c0-3-2-4-2-4 5-2 6-12-5-16-11 4-11 14-5 16 0 0-3 1-3 4v2z"/>
      <path d="M25 9a3 3 0 1 1-5 0 3 3 0 1 1 5 0z"/>
    </g>
    <path stroke="#fff" stroke-linejoin="miter" d="M18 27h10m-13 4h15m-7-15v5m-3-2h5"/>
  </g>
</svg>
    `,
  },
  [PieceType.knight]: {
    [PieceColor.white]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path fill="#fff" d="M22 10.3c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/>
    <path fill="#fff" d="M24 18.3c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.04-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-1-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-2 2.5-3c1 0 1 3 1 3"/>
    <path fill="#000" d="M9.5 25.8a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.43-9.75a.5 1.5 30 1 1-.86-.5.5 1.5 30 1 1 .86.5z"/>
  </g>
</svg>
    `,
    [PieceColor.black]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path fill="#000" d="M22 10.3c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/>
    <path fill="#000" d="M24 18.3c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.04-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-1-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-2 2.5-3c1 0 1 3 1 3"/>
    <path fill="#fff" stroke="#fff" d="M9.5 25.8a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.43-9.75a.5 1.5 30 1 1-.86-.5.5 1.5 30 1 1 .86.5z"/>
    <path fill="#fff" stroke="none" d="m24.55 10.7-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75s3.25 10.31 2.75 20.25l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z"/>
  </g>
</svg>
    `,
  },
  [PieceType.pawn]: {
    [PieceColor.white]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <path fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M22.5 9a4 4 0 0 0-3.22 6.38 6.48 6.48 0 0 0-.87 10.65c-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47a6.46 6.46 0 0 0-.87-10.65A4.01 4.01 0 0 0 22.5 9z"/>
</svg>
    `,
    [PieceColor.black]: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
  <path stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M22.5 9a4 4 0 0 0-3.22 6.38 6.48 6.48 0 0 0-.87 10.65c-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47a6.46 6.46 0 0 0-.87-10.65A4.01 4.01 0 0 0 22.5 9z"/>
</svg>
    `,
  },
};

export class PieceView extends AbstractView {
  private type: string;
  private color: string;
  // private image: string;

  constructor(piece: Piece) {
    super();
    this.color = piece.color === PieceColor.white ? 'white' : 'black';
    this.type = PieceType[piece.type];
    // this.image = PieceSVG[piece.type][piece.color];
  }

  getTemplate = () => `<div class="figure ${this.color}-${this.type}"></div>`;
}

// <div class="figure pawn white">
//                   <svg
//                     viewBox="0 0 180 180"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g filter="url(#a)">
//                       <path
//                         d="M84.474 15.117c-1.365 4.013-2.048 4.515-6.28 4.515-4.37 0-4.642.25-4.642 4.264 0 3.763.682 4.766 5.46 7.149 3.004 1.63 5.462 3.762 5.462 4.766 0 1.003-2.867 4.64-6.417 7.901-5.734 5.267-6.416 6.647-6.963 12.918-.273 3.762-.819 6.898-1.228 6.898-.273 0-2.321-1.129-4.37-2.634-8.873-6.02-24.983-6.898-35.632-1.756-5.461 2.634-11.878 9.908-13.516 15.301-3.14 10.285-1.229 16.305 10.376 32.609 8.6 11.914 10.922 17.684 12.15 30.852 1.366 13.796 4.233 16.932 18.841 20.443 16.792 4.139 55.975 3.261 70.583-1.379 9.83-3.261 11.741-5.769 12.834-16.806 1.501-14.047 4.641-22.073 14.062-35.117 9.01-12.416 10.512-16.806 9.556-26.588-2.048-18.938-25.803-28.596-46.145-18.938l-7.918 3.762-.956-6.898c-.819-6.02-1.638-7.525-6.963-12.165-7.372-6.522-7.645-9.657-1.229-13.295 3.96-2.257 4.779-3.511 4.779-7.023 0-4.013-.273-4.264-4.642-4.264-3.96 0-4.642-.502-5.734-4.139-1.092-3.26-2.048-4.139-5.598-4.39-3.822-.376-4.368.126-5.87 4.014ZM57.85 66.037c13.38 5.894 22.8 17.558 24.575 30.1 1.502 10.033 1.911 11.036 5.46 11.789 5.598 1.254 8.875-1.129 8.875-6.647 0-17.935 19.796-37.751 37.544-37.751 13.107 0 21.162 6.647 21.162 17.433 0 9.155-11.059 26.212-21.162 32.608-3.959 2.383-6.416 2.885-14.471 2.885-5.325-.125-14.199-.752-19.796-1.505-7.1-1.003-12.97-1.003-20.07-.125-10.239 1.379-18.84 1.881-26.895 1.505-3.96-.126-6.144-1.505-12.97-8.027C25.905 94.632 20.99 80.71 26.997 71.555c5.188-7.776 19.796-10.41 30.855-5.519Zm63.348 70.735c2.594.752 4.915 2.006 5.188 2.884 1.229 3.261-4.369 3.888-20.479 2.634-10.922-.878-21.025-.878-31.947 0-15.563 1.254-20.888.627-20.888-2.383 0-2.257 7.373-3.888 21.161-4.766 16.383-1.128 40.548-.251 46.965 1.631Z"
//                         fill="#000"
//                       />
//                     </g>
//                     <defs>
//                       <filter
//                         id="king-black"
//                         x="0"
//                         y="0"
//                         width="180"
//                         height="180"
//                         filterUnits="userSpaceOnUse"
//                         color-interpolation-filters="sRGB"
//                       >
//                         <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                         <feColorMatrix
//                           in="SourceAlpha"
//                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                           result="hardAlpha"
//                         />
//                         <feOffset dy="10" />
//                         <feGaussianBlur stdDeviation="7" />
//                         <feComposite in2="hardAlpha" operator="out" />
//                         <feColorMatrix
//                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"
//                         />
//                         <feBlend
//                           in2="BackgroundImageFix"
//                           result="effect1_dropShadow_385_239"
//                         />
//                         <feBlend
//                           in="SourceGraphic"
//                           in2="effect1_dropShadow_385_239"
//                           result="shape"
//                         />
//                       </filter>
//                     </defs>
//                   </svg>
//                 </div>
