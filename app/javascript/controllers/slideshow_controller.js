import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slide"]
  static values = { index: Number }

  initialize() {
    this.indexValue = 0;  // Initialize the starting slide index
    this.startSlideshow();  // Start the automatic slideshow
  }

  connect() {
    this.showCurrentSlide();
  }

  disconnect() {
    this.stopSlideshow();  // Stop the slideshow when the controller is disconnected to prevent memory leaks
  }

  next() {
    this.indexValue++;
    if (this.indexValue >= this.slideTargets.length) {  // Wrap around to the first slide
      this.indexValue = 0;
    }
    this.showCurrentSlide();
  }

  previous() {
    this.indexValue--;
    if (this.indexValue < 0) {  // Wrap around to the last slide
      this.indexValue = this.slideTargets.length - 1;
    }
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }

  startSlideshow() {
    this.intervalId = setInterval(() => this.next(), 3000);  // Automatically change slides every 3 seconds
  }

  stopSlideshow() {
    clearInterval(this.intervalId);  // Clear the interval to stop the slideshow
  }
}
