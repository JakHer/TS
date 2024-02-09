type ConvertProps<T> = T;

export const convertToArray = <T extends number | string>(
  input: ConvertProps<T>
): T[] => {
  return [input];
};

export const arr = [55, 99, 77];

export const getIndexOfArrayItem = <T,>(
  array: ConvertProps<T>[],
  arrayItem: ConvertProps<T>
) => {
  return array.findIndex((item) => item === arrayItem);
};

export const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
  return [input1, input2];
};
