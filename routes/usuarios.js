const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const { esRolValido, emailExiste } = require("../helpers/db-validators");

const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio.").not().isEmpty(),
    check(
      "password",
      "La contraseña es obligatoria y debe tener más de 6 caracteres."
    ).isLength({ min: 6 }),
    check("correo", "El correo no es válido.").isEmail(),
    // check("rol", "No es un rol permitido.").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("correo").custom(emailExiste),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuariosPost
);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
