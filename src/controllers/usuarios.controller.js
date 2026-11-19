import * as Usuario from "../models/usuarios.model.js";

export const getAllUsers = async (req, res) => {
  const users = await Usuario.selectAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await Usuario.selectById(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const getUserByDni = async (req, res) => {
  const user = await Usuario.selectByDni(req.params.dni);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const getUsersByLocalidad = async (req, res) => {
  res.json(await Usuario.selectByLocalidad(req.params.localidad));
};

export const getUsersAcceptComms = async (req, res) => {
  res.json(await Usuario.selectAcceptComms());
};

export const getUsersByApellido = async (req, res) => {
  res.json(await Usuario.selectByApellido(req.params.apellido));
};

export const getUserContact = async (req, res) => {
  const user = await Usuario.selectContactById(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const createUser = async (req, res) => {
  const id = await Usuario.insertUser(req.body);
  res.status(201).json({ message: "Usuario creado", id });
};

export const deleteUser = async (req, res) => {
  const affected = await Usuario.deleteById(req.params.id);
  if (!affected) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json({ message: "Usuario borrado" });
};

export const updateUser = async (req, res) => {
  const affected = await Usuario.updateById(req.params.id, req.body);
  if (!affected) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json({ message: "Usuario actualizado" });
};