import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import featherIcons from "feather-icons"
import "./mazer"
import "./initTheme"

// jQuery precisa vir antes do Parsley
// expoerta jQuery para o escopo global
import $ from "jquery"
window.$ = $
window.jQuery = $

featherIcons.replace()
// Agora importa Parsley
// import "parsleyjs"

// import "./pages/parsley"
// // Inicializações gerais
// document.addEventListener("turbo:load", () => {
//   featherIcons.replace()

//   // Inicializa Parsley em todos os formulários marcados
//   $("form[data-parsley-validate]").parsley()
// })
