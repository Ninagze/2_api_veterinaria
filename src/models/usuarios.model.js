import db from "../config/db.js";

export const selectAll = async () => {
  const [result] = await db.query("SELECT * FROM dueno");
        return result;
};

export const selectById = async (id) => {
  const [result] = await db.query("SELECT * FROM dueno WHERE id = ?", [id]);
    return result[0];                      
};

export const selectByDni = async (dni) => {
  const [result] = await db.query("SELECT * FROM dueno WHERE dni = ?", [dni]);
        return result[0];
};

export const selectByLocalidad = async (localidad) => {
  const [result] = await db.query("SELECT * FROM dueno WHERE localidad = ?", [localidad]);
        return result;
};

export const selectAcceptComms = async () => {
  const [result] = await db.query("SELECT * FROM dueno WHERE acepta_comunicaciones = 1");
        return result;
};

export const selectByApellido = async (apellido) => {
  const [result] = await db.query("SELECT * FROM dueno WHERE apellidos LIKE ?", [`${apellido}%`]);
        return result;
};

export const selectContactById = async (id) => {
    const [result] = await db.query("SELECT nombre, dni, telefono FROM dueno WHERE id = ?", [id]);
    return result[0];
};

export const insertUser = async (u) => {
    const [result] = await db.query(
    `INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email,
                        direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [u.dni, u.nombre, u.apellidos, u.fecha_nacimiento, u.telefono, u.email,
    u.direccion, u.localidad, u.codigo_postal, u.acepta_comunicaciones, u.fecha_alta]
);
  return result.insertId;              
};

export const deleteById = async (id) => {
    const [result] = await db.query("DELETE FROM dueno WHERE id = ?", [id]);
    return result.affectedRows;           
};

export const updateById = async (id, u) => {
    const [result] = await db.query(
    `UPDATE dueno SET dni = ?, nombre = ?, apellidos = ?, fecha_nacimiento = ?, telefono = ?,
        email = ?, direccion = ?, localidad = ?, codigo_postal = ?,
        acepta_comunicaciones = ?, fecha_alta = ?
    WHERE id = ?`,
    [u.dni, u.nombre, u.apellidos, u.fecha_nacimiento, u.telefono, u.email,
    u.direccion, u.localidad, u.codigo_postal, u.acepta_comunicaciones, u.fecha_alta, id]
    );
    return result.affectedRows;
};