// take in promises array

 function promiseAll(promises) {
  const result = [];
  let settledPromises = 0

  return new Promise((resolve, reject) => {
  try {
    promises.forEach(async (promise, idx) => {
      const value = await promise
      result[idx] = value      
      settledPromises++
      if(settledPromises === promises.length) resolve(result)
  })
 } catch (err) {
    reject()
  } 
    
  });
}

function promiseAll2(promises) {
  const results = [];
  let settledPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise
        .then((val) => {
          results[idx] = val;
          settledPromises++;
          if (settledPromises === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('foo')
    reject(new Error('error in promise foo'));
  }, 5000);
});
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("bar");
  }, 300);
});
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("baz");
  }, 500);
});

promiseAll([myPromise1, myPromise2, myPromise3]).then((val) => {
  console.log(val);
});

// const p1 = Promise.all([myPromise1, myPromise2, myPromise3])
// p1.then(val => {
//   console.log(val)
// })
