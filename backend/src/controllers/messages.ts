import database from "../lib/database.js";
import { Message } from "../types/database.types.js";
import {v4 as uuid} from "uuid"

export const getAll = (postId?: string) =>{
  if(postId && postId.length>1){
    return database.data.messages.filter(message => message.originPost == postId)

  }
  return database.data.messages
}

export const createOne = (message: Omit<Message, "id">) => {
  const newMessage = {
    id: uuid(),
    ...message
  }
  database.update(({messages}) => messages.push(newMessage))
  return {newMessage}
}

