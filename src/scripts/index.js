import initScrollReveal from "./scrollReveal.js";
import initTiltEffect from "./tiltAnimation.js";
// من src/scripts/index.js إلى src/data/scrollRevealConfig.js
import { targetElements, defaultProps } from "../data/scrollRevealConfig.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
