import { createElement } from '../../shared/render';
import { AbstractView } from './abstract-view/abstract-view';
import { LogView } from './log-view/log-view';

// const getTemplate ;

export class AppView extends AbstractView {
  log: LogView;

  constructor() {
    super();
    this.log = new LogView();
  }

  getTemplate = () => `
  <div class="app-block app-window">
          ${this.log.getTemplate()}
          <div class="game-block game">
            <ul class="chessboard">
              <!-- li elements will generate -->
              <li class="chessboard-label row-label">8</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">7</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">6</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">5</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">4</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">3</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">2</li>
              <li>
                <div class="figure pawn white">
                  <svg
                    viewBox="0 0 180 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#a)">
                      <path
                        d="M84.474 15.117c-1.365 4.013-2.048 4.515-6.28 4.515-4.37 0-4.642.25-4.642 4.264 0 3.763.682 4.766 5.46 7.149 3.004 1.63 5.462 3.762 5.462 4.766 0 1.003-2.867 4.64-6.417 7.901-5.734 5.267-6.416 6.647-6.963 12.918-.273 3.762-.819 6.898-1.228 6.898-.273 0-2.321-1.129-4.37-2.634-8.873-6.02-24.983-6.898-35.632-1.756-5.461 2.634-11.878 9.908-13.516 15.301-3.14 10.285-1.229 16.305 10.376 32.609 8.6 11.914 10.922 17.684 12.15 30.852 1.366 13.796 4.233 16.932 18.841 20.443 16.792 4.139 55.975 3.261 70.583-1.379 9.83-3.261 11.741-5.769 12.834-16.806 1.501-14.047 4.641-22.073 14.062-35.117 9.01-12.416 10.512-16.806 9.556-26.588-2.048-18.938-25.803-28.596-46.145-18.938l-7.918 3.762-.956-6.898c-.819-6.02-1.638-7.525-6.963-12.165-7.372-6.522-7.645-9.657-1.229-13.295 3.96-2.257 4.779-3.511 4.779-7.023 0-4.013-.273-4.264-4.642-4.264-3.96 0-4.642-.502-5.734-4.139-1.092-3.26-2.048-4.139-5.598-4.39-3.822-.376-4.368.126-5.87 4.014ZM57.85 66.037c13.38 5.894 22.8 17.558 24.575 30.1 1.502 10.033 1.911 11.036 5.46 11.789 5.598 1.254 8.875-1.129 8.875-6.647 0-17.935 19.796-37.751 37.544-37.751 13.107 0 21.162 6.647 21.162 17.433 0 9.155-11.059 26.212-21.162 32.608-3.959 2.383-6.416 2.885-14.471 2.885-5.325-.125-14.199-.752-19.796-1.505-7.1-1.003-12.97-1.003-20.07-.125-10.239 1.379-18.84 1.881-26.895 1.505-3.96-.126-6.144-1.505-12.97-8.027C25.905 94.632 20.99 80.71 26.997 71.555c5.188-7.776 19.796-10.41 30.855-5.519Zm63.348 70.735c2.594.752 4.915 2.006 5.188 2.884 1.229 3.261-4.369 3.888-20.479 2.634-10.922-.878-21.025-.878-31.947 0-15.563 1.254-20.888.627-20.888-2.383 0-2.257 7.373-3.888 21.161-4.766 16.383-1.128 40.548-.251 46.965 1.631Z"
                        fill="#000"
                      />
                    </g>
                    <defs>
                      <filter
                        id="king-black"
                        x="0"
                        y="0"
                        width="180"
                        height="180"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"
                        />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_385_239"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_385_239"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label row-label">1</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="chessboard-label"></li>
              <li class="chessboard-label column-label">a</li>
              <li class="chessboard-label column-label">b</li>
              <li class="chessboard-label column-label">c</li>
              <li class="chessboard-label column-label">d</li>
              <li class="chessboard-label column-label">e</li>
              <li class="chessboard-label column-label">f</li>
              <li class="chessboard-label column-label">g</li>
              <li class="chessboard-label column-label">h</li>
            </ul>
          </div>
          <div class="chat-block chat"></div>
        </div>
  `
  

  // getElement() {
  //   if (!this.element) {
  //     this.element = createElement(getTemplate());
  //   }

  //   return this.element;
  // }

  // removeElement() {
  //   this.element = null;
  // }
}
