class MessengerCircle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <button class="MessagerCircle">
      <i class="fab fa-facebook-messenger"></i>
    </button>
    `;
  }
}

customElements.define("messenger-circle", MessengerCircle);
