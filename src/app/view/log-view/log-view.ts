import { AbstractView } from "../abstract-view/abstract-view";

export class LogView extends AbstractView{
  getTemplate = () => `
<div class="log-block">
  <ul class="log-list">
    <li><h4>Starting game log:</h4></li>
    <li>
      <p class="log-timestamp">00:12</p>
      <p class="log-action">♙E2→E4</p>
    </li>
    <li>
      <p class="log-timestamp">01:05</p>
      <p class="log-action">♙D7→D5</p>
    </li>
  </ul>
</div>
`
}
