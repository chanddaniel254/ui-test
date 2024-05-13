const KEY = "NORTH AMERICAN KEY";

export const setToken = (token) => {
  localStorage.setItem(KEY, token);
  window.location.reload();
};

export const getToken = () => {
  return localStorage.getItem(KEY);
};

export const clearToken = () => {
  localStorage.removeItem(KEY);
};
