
export type FormSchema = {
  [key: string]: {
    label: string;
    type: "text" | "textarea";
    placeholder: string;
    regex?: RegExp;
    errorMessage: string;
  };
};

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