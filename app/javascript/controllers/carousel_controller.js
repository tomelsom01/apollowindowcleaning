import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="Carosel"
export default class extends Controller {
  connect() {
    console.log('carosel_controller.js loaded');
  }
}
