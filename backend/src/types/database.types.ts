export interface Post {
  id: string,
  title:string,
  author: string,
  content: string
}

export interface Message {
  id: string,
  email:string,
  name: string,
  message: string,
  phone: string,
  originPost: string
}

export type DBData = {posts: Post[], messages: Message[]}
