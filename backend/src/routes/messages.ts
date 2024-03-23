import { Router} from 'express'
import * as messagesController from '../controllers/messages.js';

const messagesRouter = Router();

messagesRouter.get('/', async (req, res) => {
  try {
    const { postId } = req.query;
    let allPosts;

    if (postId) {
      allPosts = await messagesController.getAll(postId as string);
    } else {
      allPosts = await messagesController.getAll();
    }

    res.json(allPosts);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


messagesRouter.post('/', async (req, res) => {
  try {
    const newPost = req.body;
    await messagesController.createOne(newPost);
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to put message' });
  }
});

export default messagesRouter;