const sec = ms => (ms / 1000).toFixed(2);

const estimateFor = (content) => {
  const start = window.performance.now();
  const capacity = content.querySelectorAll('*').length;
  const timeWaiting = 0;
  let completed = 0;

  return {
    increment: () => { completed += 1; },
    get progress() { return completed / capacity; },
    end: () => {
      const end = window.performance.now();
      const total = end - start;
      const layout = total - timeWaiting;
      console.log(`📖 Layout ready in ${sec(layout)}s (Waiting for images: ${sec(timeWaiting)}s)`);
    },
  };
};

export default estimateFor;