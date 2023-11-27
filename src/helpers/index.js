export const focusRef = (ref, setErrores, error) => {
  ref.current.focus();
  setErrores([error]);
};
