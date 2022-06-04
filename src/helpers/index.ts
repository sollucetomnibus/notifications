const generator = (count: number): string => {
  let result = '';
  for (let i = 0; i < count; ++i) {
    result += (16 * Math.random() | 0).toString(16);
  }
  return result;
};

export const uuidV4 = (): string => {
  const uuidV4 = `${generator(8)}-${generator(4)}-4${generator(3)}-${(((16 * Math.random() | 0) & 0x3) | 0x8).toString(16)}${generator(3)}-${generator(12)}`;
  return uuidV4;
};
