import { LitElement, html } from "lit-element";
import { router } from "lit-element-router";

import "./app-link";
import "./app-main";

import "./components/lit-header"
import "./pages/page-character"

class AppRickAndMorty extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      episodios: { type: Array },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "/",
      },
      {
        name: "character",
        pattern: "character/:id",
      },
      {
        name: "episodios",
        pattern: "episodios",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.episodios = [];
  }
  router(route, params, query, data) {
    this.params = params;
    this.query = query;
    this.route = route;
  }

  render() {
    return html`
    <lit-header></lit-header>
      <app-main active-route=${this.route}>
           <page-character route="home"></page-character>
      </app-main>
    `;
  }


}

customElements.define("app-rick-and-morty", AppRickAndMorty);
