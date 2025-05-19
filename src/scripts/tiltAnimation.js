export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  if (window.VanillaTilt) {
    VanillaTilt.init(elements, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  } else {
    console.error("VanillaTilt is not loaded");
  }
}
