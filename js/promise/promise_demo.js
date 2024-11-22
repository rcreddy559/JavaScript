console.log("-----------promise demo----------");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Resolve promise successfully !!");
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(`--------->>>> result ---->>: ${result} `);
  })
  .catch((e) => {
    console.log(`Error: ${e}`);
  });
