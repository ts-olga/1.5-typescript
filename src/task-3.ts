interface BigObject {
  [key: string]:
    | { cvalue: number | string | undefined | BigObject }
    | undefined;
}

function summ(a: BigObject): number {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (elem === undefined) return 2021;
    if (elem.cvalue === undefined) return 2021;
    if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
    if (typeof elem.cvalue === 'number') return elem.cvalue;
    return summ(elem.cvalue);
  });
  let sum = 0;
  for (let i: number = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

let A: BigObject = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

console.log(summ(A));
