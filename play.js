console.log(Math.floor(Math.random() * 9) + 1); // get randum between range.

// b is global so it keeps type out of the scope
const func = () => {
  var a = (b = 0); // === let a=0;global.d=0;
  a++;
  console.log({ b: typeof b });
  console.log({ a: typeof a });
  return a;
};

func();
console.log({ b2: typeof b });
console.log({ a2: typeof a });
