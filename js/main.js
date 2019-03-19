var a = function(obj, val) {
  obj.val = {
    a: 1,
    b: 2
  };

  return obj;
};

var b = function(obj, val) {
  return (obj.val = {
    a: 1,
    b: 2
  });
};

console.log(a({}, "val"));
console.log(b({}, "val"));
