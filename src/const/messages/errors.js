const authErrores = {
  name_required: "El nombre es obligatorio.",
  email_required: "El correo electrónico es obligatorio.",
  password_required: "La contraseña es obligatoria.",
  password_format_error:
    "La contraseña debe tener al menos 8 caracteres, y debe incluir minusculas, mayusculas y números",
  password_confirmation_required: "Debe confirmar la contraseña",
  password_missmatch: "Las contraseñas no coinciden",
};

const goalErrors = {
  name_required: "El nombre es obligatorio.",
  description_required: "La descripción es obligatoria.",
  goal_required: "La cantidad objetivo es obligatoria.",
};

export { authErrores, goalErrors };
