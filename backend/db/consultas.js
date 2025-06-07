import { pool } from "./db/consultas.js"

const getData = async () => {
    const result = await pool.query('SELECT NOW()');
    //console.log(JSON.stringify(result), null, 4);
    
}
getData();

const addData = async (titulo, img, descripcion) => {
    const consultaSQL = 'INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)';
    const values = [titulo, img, descripcion];
    const result = await pool.query(consultaSQL, values);
    console.log('Dato agregado');
    return result;
};

// addData('Gokú', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpX7k7ckHWrPKX7Rr9uMSQK2ncCExczni5Dw&s',
//     'El más fuerte del universo'
// );

const getPost = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    //console.log('Posts registrados: ');
    //console.table(rows);
    return rows;
    
};

export { addData, getPost, pool };
