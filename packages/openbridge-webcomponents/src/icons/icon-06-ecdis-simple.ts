import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-06-ecdis-simple')
export class Obi06EcdisSimple extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36111 18.675L15.6667 21L21.2778 19.2C21.4815 19.1333 21.6528 19.0333 21.7917 18.9C21.9306 18.7667 22 18.6083 22 18.425V4.3C22 3.96667 21.8472 3.72083 21.5417 3.5625C21.2361 3.40417 20.9259 3.39167 20.6111 3.525L15.6667 5.3L8.36111 3L2.75 4.775C2.52778 4.85833 2.34722 4.98333 2.20833 5.15C2.06944 5.31667 2 5.50833 2 5.725V19.675C2 20.0083 2.15278 20.2583 2.45833 20.425C2.76389 20.5917 3.07407 20.6 3.38889 20.45L8.36111 18.675ZM20.3333 17.95L16.3889 19.125V14.3125L14.7222 15.5V19.125L8.36111 17.2077L3.66667 18.825V6.025L7.61111 4.85V9.5L9.27778 9V4.85L15.6667 6.72553L20.3333 5.15V17.95Z" fill="currentColor"/>
<path d="M13.7332 9.33538L13.7023 9.34843L5.90715 12.6103L7.21208 15.7287L15.0202 12.4614L15.0382 12.4539L15.0561 12.4464C15.0625 12.4437 15.0689 12.441 15.0754 12.4384C15.0849 12.4344 15.0943 12.4305 15.1038 12.4264C16.5057 11.8191 17.5494 10.6957 18.1442 9.32186C16.7483 8.78112 15.2155 8.73589 13.7988 9.30801C13.7922 9.31072 13.7856 9.31352 13.7789 9.31633C13.774 9.3184 13.7691 9.32047 13.7642 9.3225L13.7332 9.33538Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36111 18.675L15.6667 21L21.2778 19.2C21.4815 19.1333 21.6528 19.0333 21.7917 18.9C21.9306 18.7667 22 18.6083 22 18.425V4.3C22 3.96667 21.8472 3.72083 21.5417 3.5625C21.2361 3.40417 20.9259 3.39167 20.6111 3.525L15.6667 5.3L8.36111 3L2.75 4.775C2.52778 4.85833 2.34722 4.98333 2.20833 5.15C2.06944 5.31667 2 5.50833 2 5.725V19.675C2 20.0083 2.15278 20.2583 2.45833 20.425C2.76389 20.5917 3.07407 20.6 3.38889 20.45L8.36111 18.675ZM20.3333 17.95L16.3889 19.125V14.3125L14.7222 15.5V19.125L8.36111 17.2077L3.66667 18.825V6.025L7.61111 4.85V9.5L9.27778 9V4.85L15.6667 6.72553L20.3333 5.15V17.95Z" style="fill: var(--element-active-color)"/>
<path d="M13.7332 9.33538L13.7023 9.34843L5.90715 12.6103L7.21208 15.7287L15.0202 12.4614L15.0382 12.4539L15.0561 12.4464C15.0625 12.4437 15.0689 12.441 15.0754 12.4384C15.0849 12.4344 15.0943 12.4305 15.1038 12.4264C16.5057 11.8191 17.5494 10.6957 18.1442 9.32186C16.7483 8.78112 15.2155 8.73589 13.7988 9.30801C13.7922 9.31072 13.7856 9.31352 13.7789 9.31633C13.774 9.3184 13.7691 9.32047 13.7642 9.3225L13.7332 9.33538Z" style="fill: var(--element-active-color)"/>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-06-ecdis-simple': Obi06EcdisSimple;
  }
}