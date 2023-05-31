import { LitElement, html, unsafeCSS } from "lit";
import focusedImageStyles from "./focusedImage.css?inline";
import floraStyles from "../css/flora.css?inline";

class FocusedImage extends LitElement {
  static get properties() {
    return {
      concealed: { type: Boolean },
      width: { type: Number, reflect: true },
      id: { type: String, reflect: true },
      name: { type: String, reflect: true },
      label: { type: String, reflect: true },
    };
  }

  static styles = unsafeCSS(floraStyles + "\n" + focusedImageStyles);

  constructor() {
    super();
    this.concealed = true;
  }

  _concealOrReveal() {
    this.concealed = !this.concealed;
  }

  render() {
    return html`
    `;
  }
}

customElements.define("focused-image", FocusedImage);
