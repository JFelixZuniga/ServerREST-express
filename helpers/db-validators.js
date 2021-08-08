const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRolValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la base de datos.`);
  }
};

const emailExiste = async (correo) => {
  const existeEmail = await Usuario.findOne({ correo });
  console.log(existeEmail);
  if (existeEmail) {
    throw new Error(`El correo ${correo}, ya está registrado`);
  }
};

module.exports = { esRolValido, emailExiste };
