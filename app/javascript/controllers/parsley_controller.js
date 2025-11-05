// controllers/parsley_controller.js
import { Controller } from "@hotwired/stimulus"
import "parsleyjs"
import "../pages/parsley"

export default class extends Controller {
  connect() {
    $(this.element).parsley()
  }
}