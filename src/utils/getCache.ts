
export const setCache = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getCache = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '');
};

export const removeCache = (key: string) => {
  localStorage.removeItem(key);
};
