export const focusRef = (ref, setErrores, error) => {
  ref.current.focus();
  setErrores([error]);
};

export const limitText = (text) => {
  return text.length >= 30 ? text.slice(0, 30) + "..." : text;
};
