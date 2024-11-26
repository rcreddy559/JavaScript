console.log("-----------Question -  1----------");

// rewrite the example code in sync/await style

function loadData(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  });
}

loadData("https://jsonplaceholder.typicode.com/posts/1").catch((error) =>
  console.log(error)
);

// ==== solution ====
async function loadData(url) {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}

loadData("https://jsonplaceholder.typicode.com/posts/1").catch((error) =>
  console.log(error)
);

console.log("-----------Question -  2  Recursive promises----------");

function impartentAction(message) {
  return new Promise((resolve, reject) => {
    resolve(message);
  });
}

function linkTheVideo(message) {
  return new Promise((resolve, reject) => {
    reject(message);
  });
}
function playTheVideo(message) {
  return new Promise((resolve, reject) => {
    resolve(message);
  });
}

function fetchAll(promises) {
  if (promises.length === 0) return;
  const promise = promises.shift();

  promise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return fetchAll(promises);
}

fetchAll([
  impartentAction("Video Downloaded"),
  linkTheVideo("Video Linked"),
  playTheVideo("Video Played"),
]);