(() => {
  "use strict";

  document.querySelectorAll("[data-photo-dialog]").forEach((trigger) => {
    const dialog = document.getElementById(trigger.dataset.photoDialog);
    if (!dialog) return;
    let startedOnBackdrop = false;
    const isBackdrop = (event) => {
      const rect = dialog.getBoundingClientRect();
      return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    };
    trigger.addEventListener("click", () => {
      dialog.showModal();
      document.documentElement.classList.add("photo-modal-open");
      dialog.scrollTop = 0;
      dialog.querySelector(".photo-dialog-close").focus({ preventScroll: true });
    });
    dialog.querySelector(".photo-dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusable = [...dialog.querySelectorAll("button:not([disabled]), a[href]")].filter((element) => element.getClientRects().length);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    dialog.addEventListener("pointerdown", (event) => { startedOnBackdrop = isBackdrop(event); });
    dialog.addEventListener("click", (event) => {
      if (startedOnBackdrop && isBackdrop(event)) dialog.close();
      startedOnBackdrop = false;
    });
    dialog.addEventListener("close", () => {
      document.documentElement.classList.remove("photo-modal-open");
      trigger.focus({ preventScroll: true });
    });
  });

  const egg = document.getElementById("chuyi-egg-animation");
  if (egg) {
    const poster = egg.getAttribute("src");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      egg.src = reducedMotion.matches ? poster : egg.dataset.animatedSrc;
      egg.dataset.motionState = reducedMotion.matches ? "paused" : "playing";
    };
    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
  }
})();
