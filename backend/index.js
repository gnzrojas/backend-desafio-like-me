import express from "express";
import { postData, getData, putData } from './db/consultas.js'
import cors from 'cors';
import 'dotenv-flow/config';

const PORT = process.env.DB_PORT
const app = express();

//Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');

});

//Endpoint GET para obtener los posts
app.get('/posts', async (req, res) => {
    const posts = await getData();
    res.json(posts);
});

//Endpoint POST para añadir un nuevo post
app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    await postData(titulo, img, descripcion);
    res.send('Post agregado correctamente ✅');
});

//Endpoint PUT para modificar un post
app.put('/posts/like/:id', async (req, res) => {
    try {
        const { id } = req.params;

        //Validar si existe el id
        if (!id) {
            return res.status(400).json({ error: 'ID no encontrado ❌' });
        }

        //Llamar a la función que incrementa los likes
        const updateLikes = await putData(id);

        res.json(updateLikes);

    } catch (error) {
        console.error('Error al aumentar like:', error);
        res.status(500).json({
            error: 'Error al actualizar likes❌'});
    }

});

