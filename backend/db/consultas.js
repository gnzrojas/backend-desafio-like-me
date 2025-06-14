import {pool} from "../connection.js"

//Muestra datos de la tabla
// const getData = async () => {
//     const result = await pool.query('SELECT * FROM posts ORDER BY id ASC');
//     //console.log(JSON.stringify(result), null, 4);
    
// }
// getData();

//Función para agregar un registro a la tabla
const postData = async (titulo, img, descripcion) => {
    const consultaSQL = 'INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)';
    const values = [titulo, img, descripcion];
    const result = await pool.query(consultaSQL, values);
    console.log('Dato agregado');
    return result;
};

// addData('Gokú', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpX7k7ckHWrPKX7Rr9uMSQK2ncCExczni5Dw&s',
//     'El más fuerte del universo'
// );

//Función obtener los registros de la tabla
const getData = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    return rows;
    
};

//Función para modificar un registro
const putData = async (id) => {
    const querySql = 'UPDATE posts SET likes = likes+1 WHERE id = $1 RETURNING *'; //Solo like debe actualizarse
    const result = await pool.query(querySql, [id]);
    return result.rows[0];
};

//Función para eliminar un registro
const deleteData = async (id) => {
    const querySql = "DELETE FROM posts WHERE id = $1";
    const result = await pool.query(querySql, [id]);
    return result.rows[0];
};

export { postData, getData, putData, deleteData, pool };
