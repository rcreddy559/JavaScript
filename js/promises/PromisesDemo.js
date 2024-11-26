//https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=11
console.log("-----------promise demo----------");
function impartentAction(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
}

function linkTheVideo(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(message);
    }, 2000);
  });
}
function playTheVideo(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
}

console.log("/n-----------Chain promise demo----------");
impartentAction("Video Downloaded")
  .then((data) => {
    console.log(data);
    return linkTheVideo("Video Linked");
  })
  .then((data) => {
    console.log(data);
    return playTheVideo("Video Played");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("/n-----------promise demo----------");
Promise.allSettled([
  impartentAction("Video Downloaded"),
  linkTheVideo("Video Linked"),
  playTheVideo("Video Played"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("/n-----------sync await promise demo----------");
const result = async () => {
  try {
    const data = await impartentAction("Video Downloaded");
    console.log(data);
    const data1 = await linkTheVideo("Video Linked");
    console.log(data1);
    const data2 = await playTheVideo("Video Played");
    console.log(data2);
  } catch (error) {
    console.log(error);
  }
};
result();
