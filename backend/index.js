import express from "express";
import cors from 'cors';
import 'dotenv-flow/config';
import { deletePost, getPost, postPost, putPost } from "./controllers/postsController.js";
import { routerPost } from "./routes/postsRoutes.js";

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
//Usar rutas
app.use("/posts", routerPost)



