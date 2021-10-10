import gsap from "gsap";
import { onMounted } from "@nuxtjs/composition-api";

export function setMotionFadeState(what, and = {}) {
  gsap.set(what, {
    ...and,
    opacity: 0,
    translateY: "20%"
  });
}
export function timelineHelper(timeline) {
  const helper = {
    motionFade(what) {
      timeline.to(what, {
        translateY: 0,
        opacity: 1,
        duration: 1
      });
      return helper;
    },
    to(what, options, delay) {
      timeline.to(what, { ...options, delay });
      return helper;
    }
  };
  return helper;
}
export function hiveTimeline(
  options,
  defaults = { duration: 1.5, ease: "power4", paused: true }
) {
  const timeline = gsap.timeline({ ...defaults, ...options });
  const keyFrames = [];
  const fromState = [];
  let initialised = false;
  function init() {
    if (initialised) return;
    // console.log("init", keyFrames);
    initialised = true;
    for (let i = 0; i < keyFrames.length; i++) {
      const key = keyFrames[i];
      // console.log(keyFrames[i]);
      if (key.to) timeline.to(key.target, key.options);
      else if (key.set) timeline.set(key.target, key.options);
    }
  }
  function setFromState() {
    for (let i = 0; i < fromState.length; i++) {
      const state = fromState[i];
      // console.log(state);
      gsap.set(state.target, state.state);
    }
  }
  onMounted(() => {
    setFromState();
  });
  const returned = {
    setFromState(target, state) {
      // console.log("state", state);
      fromState.push({
        target: target,
        state: state
      });
      return returned;
    },
    setFadeUpState(target, additional = {}) {
      // console.log(target, additional);
      returned.setFromState(target, {
        ...additional,
        opacity: 0,
        translateY: "20%"
      });
      return returned;
    },
    fadeUp(target, options) {
      const { opacity = 1, duration = 1 } = options || {};
      returned.to(target, {
        translateY: 0,
        opacity,
        duration
      });
      return returned;
    },
    fadeIn(target, duration = 0.6) {
      returned.to(target, {
        opacity: 1,
        duration
      });
      return returned;
    },
    to(target, options) {
      keyFrames.push({
        to: true,
        target,
        options
      });
      return returned;
    },
    set(target, options) {
      keyFrames.push({
        set: true,
        target,
        options
      });
      return returned;
    },
    play() {
      init();
      timeline.play();
    },
    reset() {
      timeline.pause();
      timeline.clear();
      initialised = false;
      setFromState();
      init();
    },
    pause() {
      timeline.pause();
    },
    end() {
      timeline.seek("-=0");
    }
  };
  return returned;
}
