class GaelComponent extends HTMLElement {
  connectedCallback() {
    console.log("First Web component");
  }
}

customElements.define("gael-component", GaelComponent);
