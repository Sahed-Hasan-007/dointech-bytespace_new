type AnimateCounterOptions = {
  from?: number;
  to: number;
  duration?: number;
  onUpdate: (value: number) => void;
};

export function animateCounter({ from = 0, to, duration = 1800, onUpdate }: AnimateCounterOptions) {
  let frameId = 0;
  let startTime: number | undefined;

  const tick = (now: number) => {
    startTime ??= now;
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - (1 - progress) ** 4;
    onUpdate(Math.round(from + (to - from) * easedProgress));

    if (progress < 1) {
      frameId = requestAnimationFrame(tick);
    }
  };

  frameId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frameId);
}
