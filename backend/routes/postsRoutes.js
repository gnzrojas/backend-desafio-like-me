import express from 'express';
import { Router } from 'express';
import { getPost, putPost, postPost, deletePost } from '../controllers/postsController.js'

const routerPost = Router();

routerPost.get('/', getPost);
routerPost.post('/', postPost);
routerPost.put('/like/:id', putPost);
routerPost.delete('/:id', deletePost);

export { routerPost };
