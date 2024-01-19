const throttle = (callback: Function, delay: number) => {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      callback();
      lastTime = now;
    }
  };
};

export default throttle;
