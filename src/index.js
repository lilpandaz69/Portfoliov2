import initScrollReveal from "./scripts/scrollReveal.js";
import initTiltEffect from "./scripts/tiltAnimation.js";
// من src/scripts/index.js إلى src/data/scrollRevealConfig.js
import { targetElements, defaultProps } from "../data/scrollRevealConfig.js";


initScrollReveal(targetElements, defaultProps);
initTiltEffect();
