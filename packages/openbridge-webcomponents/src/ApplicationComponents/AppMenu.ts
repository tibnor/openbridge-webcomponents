import { LitElement, unsafeCSS, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import compentStyle from "./AppMenu.css?inline";
import '../input/Input';
import '../Button/AppButton';

export interface MenuItem {
    id: string;
    name: string;
    icon: string;
}

@customElement('ob-app-menu')
export class AppMenu extends LitElement {
    @property({ type: Array<MenuItem> }) items: Array<MenuItem> = [];
    @state() private _search = ''

    onSearchInput(e: Event) {
        this._search = (e.target as HTMLInputElement).value;
    }

    render() {
        const filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this._search.toLowerCase()));
        return html`
        <div class="card">
            <ob-input placeholder="Search" icon="01-search" @input=${this.onSearchInput}></ob-input>
            <div class="main-apps">
                ${filteredItems.map(item => html`
                    <ob-app-button icon=${item.icon} label=${item.name}></ob-app-button>
                `)}
            </div>
        </div>
    `
    }

    static styles = unsafeCSS(compentStyle);
}

declare global {
    interface HTMLElementTagNameMap {
        'ob-app-menu': AppMenu
    }
}
