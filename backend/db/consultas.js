import {pool} from "../connection.js"

//Función obtener los registros de la tabla (GET)
const getData = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    return rows;
    
};

//Función para agregar un registro a la tabla (POST)
const postData = async (titulo, img, descripcion) => {
    const consultaSQL = 'INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)';
    const values = [titulo, img, descripcion];
    const result = await pool.query(consultaSQL, values);
    console.log('Dato agregado');
    return result;
};


//Función para modificar un registro (PUT)
const putData = async (id) => {
    const querySql = 'UPDATE posts SET likes = likes+1 WHERE id = $1 RETURNING *'; //Solo like debe actualizarse
    const result = await pool.query(querySql, [id]);
    return result.rows[0];
};

//Función para eliminar un registro (DELETE)
const deleteData = async (id) => {
    const querySql = "DELETE FROM posts WHERE id = $1";
    const result = await pool.query(querySql, [id]);
    return result.rows[0];
};

export { postData, getData, putData, deleteData, pool };
