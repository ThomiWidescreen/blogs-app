import { API_URL } from "@/configs"
import { Post } from "@/global.types"
import axios from "axios"

export const getAll = async (page?:number, perPage?:number) => {
  try {
    const {data} = await axios.get<{posts: Post[], perPage: number, totalPages: number, page: number}>(`${API_URL}/posts/`, {
      params:{
        page,
        perPage
      }
    })
  return data
  } catch (error) {
    alert("Error, the api just returned 400.")
    return {
      posts: [],
      perPage: 0,
      page: 0,
      totalPages:0
    }
  }
}

export const getOne = async (id: string) => {
  try {
    const {data} = await axios.get<Post>(`${API_URL}/posts/${id}`)
  return data
  } catch (error) {
    alert("Error, the api just returned 400.")
    return {} as Post
  }
}
