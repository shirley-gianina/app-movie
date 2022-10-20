import { LitElement, html, css } from "lit-element";

import globalCSS from "../styles/global";

export class PageCharacter extends LitElement {
/*   static get properties() {
    return {
  } */


  static get styles() {
    return [
      globalCSS,
      css`
        :host {
          display: block;
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }


      `,
    ];
  }
  constructor() {
    super();
    this.characters = [];
   /*  this.charactersCopy = []; */

  }

  firstUpdated() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => this._handleData(res.results));
  }

  _handleData(res) {
    console.log(res, "soy la data")
    this.characters = [...res];
    this.charactersCopy = [...res];

    this.requestUpdate();
  }

  render() {
    return html`
      <div class="container">
        <div>
          <p>hola</p>
        </div>

      </div>
    `;
  }

}

customElements.define("page-character", PageCharacter);
