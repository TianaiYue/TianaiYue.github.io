(function () {
  "use strict";
  var mural = document.querySelector(".mural");
  if (!mural) return;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  var frame = null;
  var visible = true;
  var target = { x: 0, y: 0, light: 0 };
  var current = { x: 0, y: 0, light: 0 };
  function draw() {
    frame = null;
    if (reduced.matches || !visible || document.hidden) return;
    var rect = mural.getBoundingClientRect();
    var progress = Math.min(1, Math.max(0, -rect.top / rect.height));
    current.x += (target.x - current.x) * 0.09;
    current.y += (target.y - current.y) * 0.09;
    current.light += (target.light - current.light) * 0.09;
    mural.style.setProperty("--mural-x", (current.x * -10).toFixed(2) + "px");
    mural.style.setProperty("--mural-y", (current.y * -7 + progress * 42).toFixed(2) + "px");
    mural.style.setProperty("--light-x", (50 + current.x * 50).toFixed(2) + "%");
    mural.style.setProperty("--light-y", (50 + current.y * 50).toFixed(2) + "%");
    mural.style.setProperty("--light-opacity", current.light.toFixed(3));
    mural.style.setProperty("--scroll-fade", (progress * 0.55).toFixed(3));
    if (Math.abs(current.x - target.x) + Math.abs(current.y - target.y) + Math.abs(current.light - target.light) > 0.002) queue();
  }
  function queue() {
    if (!frame && !reduced.matches && visible && !document.hidden) frame = window.requestAnimationFrame(draw);
  }
  function reset() {
    target.x = target.y = target.light = 0;
    if (reduced.matches) {
      if (frame) window.cancelAnimationFrame(frame);
      frame = null;
      current.x = current.y = current.light = 0;
      mural.removeAttribute("style");
    } else queue();
  }
  mural.addEventListener("pointermove", function (event) {
    if (!fine.matches || event.pointerType === "touch") return;
    var rect = mural.getBoundingClientRect();
    target.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    target.y = (event.clientY - rect.top) / rect.height * 2 - 1;
    target.light = 1;
    queue();
  }, { passive: true });
  mural.addEventListener("pointerleave", reset);
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });
  document.addEventListener("visibilitychange", reset);
  reduced.addEventListener("change", reset);
  fine.addEventListener("change", reset);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) queue();
    }).observe(mural);
  }
  queue();
  var viewer = document.querySelector(".mural-viewer");
  var open = document.querySelector(".mural__open");
  if (!viewer || typeof viewer.showModal !== "function") return;
  open.hidden = false;
  open.addEventListener("click", function () {
    viewer.showModal();
    document.documentElement.classList.add("artwork-open");
  });
  viewer.querySelector("button").addEventListener("click", function () { viewer.close(); });
  viewer.addEventListener("click", function (event) { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener("close", function () {
    document.documentElement.classList.remove("artwork-open");
    open.focus({ preventScroll: true });
  });
})();
