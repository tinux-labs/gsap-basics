import gsap from "gsap";

// triggers when the initial HTML is fully loaded.
document.addEventListener("DOMContentLoaded", () => {
  /* TWEENS */

  // Example 1:

  // to("selector", objProps)
  const tweenTo = gsap.to(".box", {
    x: 300,
    duration: 3,
    rotate: 90,
    ease: "power1",

    // infinite
    repeat: -1,
    yoyo: true,
  });

  document.getElementById("play")?.addEventListener("click", () => {
    tweenTo.play();
  });
  document.getElementById("#pause")?.addEventListener("click", () => {
    tweenTo.pause();
  });
  document.getElementById("#resume")?.addEventListener("click", () => {
    tweenTo.resume();
  });
  document.getElementById("#reverse")?.addEventListener("click", () => {
    tweenTo.reverse();
  });
  document.getElementById("#restart")?.addEventListener("click", () => {
    tweenTo.restart();
  });

  // Example 2

  // fromTo("selector", startObjProps, endObjProps)
  gsap.fromTo(
    ".box2",
    {
      opacity: 0.2,
      x: 0,
    },
    {
      opacity: 1,
      x: 300,
      duration: 3,

      // Infinite
      repeat: -1,
      yoyo: true,
    }
  );

  /* TIMELINE */
  const tl = gsap.timeline();
  tl.to(".item1", {
    x: 300,
    borderRadius: "50%",
    duration: 2,
    repeat: -1,
    yoyo: true,
  });
  tl.to(
    ".item2",
    { x: 300, rotate: 90, duration: 2, repeat: -1, yoyo: true },
    "-=1.8"
  );
  tl.to(
    ".item3",
    {
      x: 300,
      background: "transparent",
      border: "10px solid black",
      duration: 2,
      repeat: -1,
      yoyo: true,
    },
    "-=1.6"
  );
});
