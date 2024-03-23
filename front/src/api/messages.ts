import { API_URL } from "@/configs"
import { Message } from "@/global.types"
import axios from "axios"

export const createOne = async (newMessage: Omit<Message, "id">) => {
  try {
    await axios.post(`${API_URL}/messages/`, newMessage)
  } catch (error) {
    alert("Error, the api just returned 400.")
  }
}