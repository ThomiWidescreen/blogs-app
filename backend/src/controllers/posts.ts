import database from "../lib/database.js";
import { Post } from "../types/database.types.js";
import {v4 as uuid} from "uuid"

const totalPages = (perPage: number) => {
  return Math.ceil(database.data.posts.length / perPage);
};

export const getAll = (page?: number, perPage?: number) => {
  if (page && perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return {
      posts: database.data.posts.slice(startIndex, endIndex),
      page,
      perPage,
      totalPages: totalPages(perPage)
    }
  }
  return {
    posts: database.data.posts
  }
};

export const getById = (id: string) => {
  return database.data.posts.find(post => post.id === id)
}

export const createOne = async (post: Omit<Post, "id">) => {
  const newPost = {
    ...post,
    id: uuid()
  }
  database.update(({posts}) => posts.push(newPost))
  return {newPost}
}

export const createMany = async (posts: Omit<Post, "id">[]) => {
  const newPosts = posts.map(post => ({...post, id: uuid()}))
  database.update(({posts: oldPosts}) => oldPosts.push(...newPosts))
  return {newPosts}
}