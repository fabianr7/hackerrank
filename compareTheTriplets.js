var a = [17, 28, 30];
var b = [99, 16, 8];

compareTriplets = (a, b) => {
  let alice = 0, bob = 0;
  a.forEach((e1, i) => {
    if (e1 > b[i]) alice++;
    if (e1 < b[i]) bob++;
  });
  return [alice, bob];
};

console.log(compareTriplets(a, b));
