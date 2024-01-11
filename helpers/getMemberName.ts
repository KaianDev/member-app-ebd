export const getMemberName = (name: string) => {
  const nameArray = name.split(" ");
  const arraySize = nameArray.length;
  return `${nameArray[0]} ${nameArray[arraySize - 1]}`;
};
