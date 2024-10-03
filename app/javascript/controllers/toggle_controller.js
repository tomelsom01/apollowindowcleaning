import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggalableElement"];

  toggle() {
    // Toggle visibility classes for the sliding effect
    this.toggalableElementTarget.classList.toggle("sidebar-visible");
    this.toggalableElementTarget.classList.toggle("sidebar-hidden");
  }
}
