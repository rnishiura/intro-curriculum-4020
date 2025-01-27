'use strict';

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(11); }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13); }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17); }, 1000);
  });
}

async function main() {
  const result = await getA().then(a => {
    return getB().then(b => {
      return getC().then(c => {
        return a * b * c;
      });
    });
  });
  console.log(result);
}

main();