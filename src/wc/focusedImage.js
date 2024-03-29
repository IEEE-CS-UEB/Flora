import { LitElement, html, unsafeCSS, css } from "lit";
// import styles from "../css/flora.css";
import {
  propertyIsValidCssSize,
  propertyUsesValidAspectRatioSyntax,
  propertyUsesValidBgPositionValue,
} from "./verifyCSS";

class FocusedImage extends LitElement {
  static get properties() {
    return {
      src: { type: String, reflect: true },
      alt: { type: String, reflect: true },
      width: { type: String, reflect: true },
      aspectratio: { type: String, reflect: true },
      bgposition: { type: String, reflect: true },
      displayalt: { type: Boolean, reflect: true },
    };
  }

  connectedCallback() {
    super.connectedCallback()
    if (!this.alt) {
      throw Error(
        "Flora A11yError: Focused Image Web Component must have an alt text"
      );
    }

    if (!this.src) {
      throw Error(
        "Flora ComponentError: Focused Image Web Component must have a src"
      );
    }

    if (this.src) {
      try {
        new URL(this.src);
      } catch (Error) {
        throw Error(
          "Flora ComponentError: Focused Image Web Component must have a valid URL as it's src"
        );
      }
    }

    if (this.width) {
      propertyIsValidCssSize(this.width);
    }

    if (this.aspectratio) {
      propertyUsesValidAspectRatioSyntax(this.aspectratio);
    }

    if (!this.displayalt) {
      this.displayalt = false;
    }

    if (!this.backgroundposition) {
      this.backgroundposition = "center";
    } else {
      propertyUsesValidBgPositionValue(this.backgroundposition);
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href="./src/css/flora.css" />
      <div
        class="Img ${this.displayalt ? "" : "Notext"}"
        style="width: ${this.width}; background-image: url(${this
          .src}); aspect-ratio: ${this.aspectratio}; background-position: ${this
          .bgposition}; border-radius: 5px; margin-bottom: 19px;"
      >
        <img alt="${this.alt}" />
      </div>
    `;
  }
}

customElements.define("focused-image", FocusedImage);
