// We could import PerfectScrollbar directly in the sidebar module
import initSidebar from "./components/sidebar"
import "./components/dark"

document.addEventListener("turbo:load", () => {
  initSidebar();
});