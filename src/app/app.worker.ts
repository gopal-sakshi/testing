/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(`msg ===> ${data}`);
  const res23 = calculateFibonacci(15);
  postMessage(res23);
});

function calculateFibonacci(num) {
  if (num == 1 || num == 2) {
      return 1
  }
  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2)
}
