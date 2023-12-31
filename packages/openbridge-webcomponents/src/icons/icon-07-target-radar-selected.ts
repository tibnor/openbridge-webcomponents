import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-07-target-radar-selected')
export class Obi07TargetRadarSelected extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4.22222V8.66667H4.22222V4.22222H8.66667V2H4.22222C3 2 2 3 2 4.22222Z" fill="currentColor"/>
<path d="M4.22222 15.3334H2V19.7779C2 21.0001 3 22.0001 4.22222 22.0001H8.66667V19.7779H4.22222V15.3334Z" fill="currentColor"/>
<path d="M15.3333 19.7779H19.7778V15.3334H22V19.7779C22 21.0001 21 22.0001 19.7778 22.0001H15.3333V19.7779Z" fill="currentColor"/>
<path d="M19.7778 2H15.3333V4.22222H19.7778V8.66667H22V4.22222C22 3 21 2 19.7778 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 10.9375 16.1318 9.96099 15.516 9.19116L12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536C11.4512 12.1583 11.4512 11.8417 11.6464 11.6464L14.8088 8.48405C14.039 7.86824 13.0625 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4.22222V8.66667H4.22222V4.22222H8.66667V2H4.22222C3 2 2 3 2 4.22222Z" style="fill: var(--element-active-color)"/>
<path d="M4.22222 15.3334H2V19.7779C2 21.0001 3 22.0001 4.22222 22.0001H8.66667V19.7779H4.22222V15.3334Z" style="fill: var(--element-active-color)"/>
<path d="M15.3333 19.7779H19.7778V15.3334H22V19.7779C22 21.0001 21 22.0001 19.7778 22.0001H15.3333V19.7779Z" style="fill: var(--element-active-color)"/>
<path d="M19.7778 2H15.3333V4.22222H19.7778V8.66667H22V4.22222C22 3 21 2 19.7778 2Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 10.9375 16.1318 9.96099 15.516 9.19116L12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536C11.4512 12.1583 11.4512 11.8417 11.6464 11.6464L14.8088 8.48405C14.039 7.86824 13.0625 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" style="fill: var(--element-active-color)"/>
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
    'obi-07-target-radar-selected': Obi07TargetRadarSelected;
  }
}
