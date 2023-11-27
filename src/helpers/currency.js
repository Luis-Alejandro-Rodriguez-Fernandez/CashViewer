export const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
};

export const limitText = (text) => {
  return text.length >= 30 ? text.slice(0, 30) + "..." : text;
};
