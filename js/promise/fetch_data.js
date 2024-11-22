const fetchDemo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("----------- this is fetch demo resolve ------------");
    }, 1000);
  });
};

fetchDemo()
  .then((data) => {
    console.log(`result: ${data}`);
    return "processing data";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
