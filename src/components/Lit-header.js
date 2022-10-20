import { LitElement, html, css } from "lit-element";
/* import globalCSS from "../styles/global"; */

class LitHeader extends LitElement {
  static get properties() {
    return {

    };
  }

  static get styles() {
    return css`
        :host {
          display: block;
          box-sizing: border-box;
        }

        header {
          padding: 10px;
          background-color: #fecc00;
        }

        .logo img {
          width: 100px;
          height: 90%;
          padding: 20px;
          color: #fecc00;
        }
      `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
            <app-link href="/">
              <div class="logo">
                <img src="/assets/logo.png" alt="logo-cinema" />
                <h1>Rick y Morty</h1>
              </div>
            </app-link>
      </header>
    `;
  }

}

customElements.define("lit-header", LitHeader);
