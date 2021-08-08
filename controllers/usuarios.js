const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

const usuariosGet = (req, res) => {
  // const { nombre, apikey, page = 1 } = req.query;
  const query = req.query;

  res.json({
    msg: "get API - Controlador",
    query,
  });
};

const usuariosPut = async (req, res) => {
  const { id } = req.params;
  const { password, google, correo, ...resto } = req.body;

  // Validar contra BBDD
  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  // findByIdAndUpdate -> busca el ID y actualiza la información, la cual queda guardada en la variable usuario
  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    msg: "put API - Controlador",
    usuario,
  });
};

const usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;

  // Creamos una instancia del esquema usuario
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Ahora guardamos la instancia de usuario en mongodb
  usuario.save();

  res.json({
    usuario,
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch API - Controlador",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
};
