const isSubsetOf = (base, sample) => {
  let setArr = [...new Set([...base, ...sample])];
  if (setArr.length === base.length) return true;
  return false;
};
