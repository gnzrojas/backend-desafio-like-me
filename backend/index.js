import express from "express";
import { addData, getPost } from './db/consultas.js'
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
    console.log(`Server running on http://localhost:${PORT}`);
    
});

//Endpoint GET para obtener los posts
app.get('/posts', async (req, res) =>{
    const posts = await getPost();
    res.json(posts);
});

//Endpoint POST para añadir un nuevo post
app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    await addData(titulo, img, descripcion);
    res.send('Post agregado correctamente ✅');
});