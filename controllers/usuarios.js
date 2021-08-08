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

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "put API - Controlador",
    id,
  });
};

const usuariosPost = async (req, res) => {
  

  const { nombre, correo, password, rol } = req.body;

  // Creamos una instancia del esquema usuario
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "Ese correo ya está registrado",
    });
  }

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Ahora guardamos la instancia de usuario en mongodb
  usuario.save();

  res.json({
    msg: "post API - Controlador",
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
