import { Router} from 'express'
import * as postsController from '../controllers/posts.js';

const postsRouter = Router();

postsRouter.get('/', (req, res) => {
  const {page, perPage} = req.query
  const allPosts = postsController.getAll(parseInt(page as string), parseInt(perPage as string));
  res.json(allPosts);
});

postsRouter.get('/:id', (req, res) => {
  const postId = req.params.id;
  const post = postsController.getById(postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

postsRouter.post('/', async (req, res) => {
  try {
    const newPost = req.body;
    if(!newPost.author || !newPost.title || !newPost.content){
      res.status(500).json({ error: 'Incomplete data.' });
    }
    await postsController.createOne(newPost);
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

postsRouter.post('/bulk', async (req, res) => {
  try {
    const newPosts = req.body;
    await postsController.createMany(newPosts);
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default postsRouter;