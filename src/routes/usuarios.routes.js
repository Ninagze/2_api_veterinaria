//obtener todos los usuarios
///obtener usuario por id
//obtener un usuario completo por su dni
//obtener todos los usuarios de una localidad
//obtener todos los usuarios que aceptan comunicaciones
//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez
// obtener solo el nombre, dni, telefono de un usuario por id.
//insertar un usuario
//borrar un usuario por id
// actualizar los datos de un usuario por id


import { Router } from "express";
import {
getAllUsers, getUserById, getUserByDni, getUsersByLocalidad,
getUsersAcceptComms, getUsersByApellido, getUserContact,
createUser, deleteUser, updateUser,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/dni/:dni", getUserByDni);
router.get("/localidad/:localidad", getUsersByLocalidad);
router.get("/comunicaciones", getUsersAcceptComms);
router.get("/apellido/:apellido", getUsersByApellido);
router.get("/:id/contacto", getUserContact);
router.get("/:id", getUserById);       

router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;




