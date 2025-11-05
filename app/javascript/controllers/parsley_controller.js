// controllers/parsley_controller.js
import { Controller } from "@hotwired/stimulus"
import "parsleyjs"
import "parsleyjs/dist/i18n/pt-br"
import "../pages/parsley"

export default class extends Controller {
  connect() {
    window.Parsley.setLocale("pt-br")
    $(this.element).parsley()
  }
  
  disconnect() {
    // Destroi a instância para evitar duplicação após navegação Turbo
    if ($(this.element).data("Parsley")) {
      $(this.element).parsley().destroy()
    }
  }
}