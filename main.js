// WEB COMPONENT
class GaelComponent extends HTMLElement {
  connectedCallback() {
    // console.log("First Web component");
    const name = this.getAttribute("name");
    // this.innerText = "Hello" + name;
    this.innerText = name;
    // console.log(name);
  }
}

// CARD WEB COMPONENT
class CardComponent extends HTMLElement {
  setCardActive() {
    // console.log("Button was clicked...");
    this.setAttribute("is-active", true);
  }
  connectedCallback() {
    // console.log(this);

    // IMAGE LINK
    const $imgLink = document.createElement("a");
    $imgLink.target = "_blank";
    $imgLink.href = this.getAttribute("site-url");

    // IMAGE
    const $img = document.createElement("img");
    $img.src = this.getAttribute("img-url");
    $img.alt = this.getAttribute("img-alt");

    // TITLE
    const $title = document.createElement("h3");
    $title.innerText = this.getAttribute("name");

    // DESCRIPTION
    const $description = document.createElement("p");
    $description.innerText = this.getAttribute("description");

    // SITE URL
    const $siteURL = document.createElement("a");
    $siteURL.href = this.getAttribute("site-url");
    $siteURL.innerText = this.getAttribute("site-url");

    // REPO URL
    const $repoURL = document.createElement("a");
    $repoURL.href = this.getAttribute("repo-url");
    $repoURL.innerText = this.getAttribute("repo-url");

    // ACTIVE BUTTON
    const $activeButton = document.createElement("button");
    $activeButton.innerText = "Active";
    // Use: .bind(this) on the function call,
    // to bind it to the class CardComponent instance (parent element in the HTML dom),
    // instead of the button element, where we call the method connectedCallback()
    $activeButton.addEventListener("click", this.setCardActive.bind(this));

    // APPEND
    $imgLink.append($img);
    this.append($imgLink);
    this.append($title);
    this.append($description);
    this.append($siteURL);
    this.append($repoURL);
    this.append($activeButton);
  }
}

customElements.define("gael-component", GaelComponent);
customElements.define("card-component", CardComponent);
