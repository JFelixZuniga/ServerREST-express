const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    emun: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

// Mongoose -> es un modelador de objetos de nuestra información. Facilita la inserción de información, lectura, querys, liampia pa info para prevenir query injection, etc.

// Para exportar se usa la función del modelo, la cual pide en el primer parámetro el nombre del modelo, y en el 2do el nombre del esquema
module.exports = model("Usuario", UsuarioSchema);
