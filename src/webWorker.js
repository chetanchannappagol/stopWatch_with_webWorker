export default function webWorker() {
  let sec = 0;
  let min = 0;
  let hr = 0;
  setInterval(() => {
    sec = sec + 1;

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    if (min === 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    const data = {
      hr,
      min,
      sec,
    };
    postMessage(data);
  }, 1000);
}
