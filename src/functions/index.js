export const getEndings = (val, titles) => {
  const ending = val % 10;
  if (val >= 10 && val <= 20) return `${val} ${titles[1]}`;
  if (ending === 1) return `${val} ${titles[0]}`;
  if (ending >= 2 && ending <= 4) return `${val} ${titles[2]}`;
  return `${val} ${titles[1]}`; // if ending === 0
};

export const genIdFromObjValues = obj =>
  ''.concat(
    ...Object.values(obj).map(prop =>
      prop instanceof Array ? prop.map(item => genIdFromObjValues(item)) : String(prop)
    )
  );
