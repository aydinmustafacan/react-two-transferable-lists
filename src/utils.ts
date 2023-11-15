export function intersection(l1, l2) {
  return l1.filter((val) => {
    return l2.indexOf(val) !== -1;
  });
}

export function not(l1, l2) {
  return l1.filter((val) => l2.indexOf(val) === -1);
}

export function calculateWordCount(s) {
  const listOfStrings = s.split(" ").filter((itm) => itm.length !== 0);
  return listOfStrings.length;
}

export function debounce(fn, t) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), t);
  };
}
