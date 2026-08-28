(function () {
  "use strict";

  var background = document.querySelector(".interactive-background");
  if (!background) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var frame = null;
  var pointerX = window.innerWidth / 2;
  var pointerY = window.innerHeight * 0.38;

  function renderPointer() {
    frame = null;

    var xRatio = pointerX / window.innerWidth;
    var yRatio = pointerY / window.innerHeight;
    var travel = window.innerWidth < 600 ? 5 : 16;

    background.style.setProperty("--spotlight-x", (xRatio * 100).toFixed(2) + "%");
    background.style.setProperty("--spotlight-y", (yRatio * 100).toFixed(2) + "%");
    background.style.setProperty("--background-shift-x", ((0.5 - xRatio) * travel).toFixed(2) + "px");
    background.style.setProperty("--background-shift-y", ((0.5 - yRatio) * travel).toFixed(2) + "px");
  }

  function queuePointerRender(event) {
    if (reduceMotion.matches) return;

    pointerX = event.clientX;
    pointerY = event.clientY;

    if (!frame) frame = window.requestAnimationFrame(renderPointer);
  }

  function renderScroll() {
    if (reduceMotion.matches) {
      background.style.setProperty("--background-scroll-y", "0px");
      return;
    }

    var offset = Math.max(-28, -window.scrollY * 0.035);
    background.style.setProperty("--background-scroll-y", offset.toFixed(2) + "px");
  }

  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", queuePointerRender, { passive: true });
  }

  window.addEventListener("scroll", renderScroll, { passive: true });
  reduceMotion.addEventListener("change", renderScroll);
  renderPointer();
  renderScroll();
})();
