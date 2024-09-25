import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleableElement", "blurBackground"]

  fire(event) {
    const toggleableElement = this.toggleableElementTarget;
    const blurBackground = this.blurBackgroundTarget;
    const button = event.currentTarget;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle ARIA expanded attribute
    button.setAttribute('aria-expanded', !expanded);

    // Toggle menu visibility classes
    toggleableElement.classList.toggle('menu-hidden');
    toggleableElement.classList.toggle('menu-visible');

    // Toggle background blur effect
    blurBackground.classList.toggle('blurred-background-visible');

    // Hide the menu button when the menu is open
    this.menuButtonTarget.classList.toggle('menu-button-hidden');
    this.closeButtonTarget.classList.toggle('menu-button-hidden');
  }
}
