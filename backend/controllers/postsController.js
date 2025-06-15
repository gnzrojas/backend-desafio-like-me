import { postData, getData, putData, deleteData } from '../db/consultas.js'

const getPost = async (req, res) => {
    try {
        const posts = await getData();
        res.json(posts);
        
    } catch (error) {
        res.send(500).send('❌No es posible obtener el post: ', error.message)
    }
}

const postPost = async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        await postData(titulo, img, descripcion);
        res.send('Post agregado correctamente ✅');
        
    } catch (error) {
        res.status(500).send('❌Error al ingresar el post: ', error.message)
    }
}

const putPost = async (req, res) => {
    try {
        const { id } = req.params;
        await putData(id);
        res.send('Post modificado con éxito✅');
        
    } catch (error) {
        res.status(500).send('❌Error al modificar el post: ', error.message)
    }
}

const deletePost = async(req,res) => {
    try {
        const { id } = req.params;
        await deleteData(id);
        res.send('Registro eliminado con éxito✅')
        
    } catch (error) {
        res.send(500).send('❌Error al eliminar el post: ', error.message)
    }
}

export {getPost, postPost, putPost, deletePost};