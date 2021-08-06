const { response } = require("express");

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

const usuariosPost = (req, res) => {
  const body = req.body;

  res.json({
    msg: "post API - Controlador",
    body,
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
