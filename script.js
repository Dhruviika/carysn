var cursor = document.querySelector("#cursor");
var cursorblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorblur.style.left = dets.x - 150 + "px";
  cursorblur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "rgba(0, 0, 0, 0.8)",

  duration: 0.5,
  delay: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -50%",
    end: "top -80%",
    scrub: 1,
  },
});
