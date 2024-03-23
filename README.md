# Blogs App



Simple blogs app powered by **Next.js** and **Express**.

![First Image](https://i.ibb.co/Fw49kWX/first.png)

![Second Image](https://i.ibb.co/RDkRkLm/second.png)

## Complete Stack
- Node 18.17
- Typescript 7.4

##### Backend

- Express
- Lowdb

Why? Express is the best api framework to use in small projects, and LowDB works like a SQLite but with a syntaxis closer to MongoDB.
##### Frontend

- Nextjs
- Tailwind

Why? Next works well for SSR, an important feature for the blogs. Tailwind is the most used styling library.

## Features



- Infinite Scroll
- Contact Modal
- Responsive Design

## Setup

Requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

To run the front (runs default in port 4000)
```sh
cd front
yarn
yarn build
yarn start

```

To run the back (runs default in port 3000)
```sh
cd backend
yarn
yarn build
yarn start

```

# API Routes

### Posts Routes
### Get All Posts
- **URL:** `/posts/`
- **Method:** `GET`
- **Description:** Retrieves all posts.
- **Query Parameters:** 
  - `page` (optional): Page number for pagination.
  - `perPage` (optional): Number of posts per page for pagination.
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** Array of Post objects.
- **Error Response:**
  - **Code:** 404 Not Found
  - **Content:** `{ error: 'Post not found' }`

### Get Post by ID
- **URL:** `/posts/:id`
- **Method:** `GET`
- **Description:** Retrieves a post by its ID.
- **Path Parameters:**
- `id`: ID of the post to retrieve.
- **Success Response:**
- **Code:** 200 OK
- **Content:** Single Post object.
- **Error Response:**
- **Code:** 404 Not Found
- **Content:** `{ error: 'Post not found' }`

### Create New Post
- **URL:** `/posts/`
- **Method:** `POST`
- **Description:** Creates a new post.
- **Request Body:** Post object (title, author, content).
- **Success Response:**
- **Code:** 201 Created
- **Content:** `{ message: 'Post created successfully' }`
- **Error Response:**
- **Code:** 500 Internal Server Error
- **Content:** `{ error: 'Failed to create post' }` or `{ error: 'Incomplete data.' }` if request body is missing required fields.

### Create Multiple Posts in Bulk
- **URL:** `/posts/bulk`
- **Method:** `POST`
- **Description:** Creates multiple posts in bulk.
- **Request Body:** Array of Post objects.
- **Success Response:**
- **Code:** 201 Created
- **Content:** `{ message: 'Post created successfully' }`
- **Error Response:**
- **Code:** 500 Internal Server Error
- **Content:** `{ error: 'Failed to create post' }`

### Messages Routes

### Get All Messages
- **URL:** `/messages/`
- **Method:** `GET`
- **Description:** Retrieves all messages.
- **Query Parameters:** 
- `postId` (optional): ID of the post to filter messages by.
- **Success Response:**
- **Code:** 200 OK
- **Content:** Array of Message objects.
- **Error Response:**
- **Code:** 500 Internal Server Error
- **Content:** `{ error: 'Internal Server Error' }`

### Create New Message
- **URL:** `/messages/`
- **Method:** `POST`
- **Description:** Creates a new message.
- **Request Body:** Message object (email, name, message, phone, originPost).
- **Success Response:**
- **Code:** 201 Created
- **Content:** `{ message: 'Message created successfully' }`
- **Error Response:**
- **Code:** 500 Internal Server Error
- **Content:** `{ error: 'Failed to put message' }`
