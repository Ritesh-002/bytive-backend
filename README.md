# To-Do List API Service

This is a simple To-Do List API service built using Node.js, Express.js, and MongoDB. The API provides endpoints to manage tasks, including creating, fetching, updating, and deleting tasks. JWT-based authentication ensures secure access to the API. You can only perform the CRUD Operations after you are authenticated successfully.

## Features
- **Create Task**: Add a new task with a title, description, and default status (`pending`).
- **Fetch All Tasks**: Retrieve a list of all tasks.
- **Fetch Task by ID**: Retrieve a specific task by its unique ID.
- **Update Task Status**: Modify the status of a task (`pending`, `in-progress`, `completed`).
- **Delete Task**: Remove a task by its ID.
- **JWT Authentication**: Secure access to all endpoints.

## Requirements
- **Node.js** 
- **MongoDB** (local or cloud instance)

## Installation
1. **Clone the Repository**
   ```bash
   git clone git@github.com:Ritesh-002/bytive-backend.git
   cd bytive-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=port_number
   MONGO_URI=mongo_atlas_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRY=number_of_days
   ```

4. **Run the Application**
   Start the server:
   ```bash
   npm run start
   ```
   The server will run on `http://localhost:{port}`.

## API Endpoints
### Authentication
- **Login**: Obtain a JWT token for API access.
  ```http
  POST /users/login
  ```
  **Body**:
  ```json
  {
    "email": "example@gmail.com",
    "password": "password"
  }
  ```

- **Register**: Responsible for creating JWT.
  ```http
  POST /users/register
  ```
  **Body**:
  ```json
  {
    "fullName": "Ritesh chugh",
    "email": "example@gmail.com",
    "password": "password"
  }
  ```

- **Logout**: Responsible for logging out user.
  ```http
  POST /users/logout
  ```
  **Body**:
  ```Empty```

### Tasks
- **Create Task**
  ```http
  POST /tasks
  ```
  **Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```

- **Fetch All Tasks**
  ```http
  GET /tasks
  ```

- **Fetch Task by ID**
  ```http
  GET /tasks/:id
  ```

- **Update Task Status**
  ```http
  PUT /tasks/:id
  ```
  **Body**:
  ```json
  {
    "status": "in-progress"
  }
  ```

- **Delete Task**
  ```http
  DELETE /tasks/:id
  ```

## Project Structure
```plaintext
├── src
│   ├── controllers  # Logic for handling API requests
│   ├── config       # Database configuration
│   ├── middleware   # Authentication and other middleware
│   ├── models       # Mongoose models
│   ├── routes       # API route definitions
│   ├── utils        # Util functions
│   ├── server.js    # Server file
│   └── app.js       # Main application file
├── .env             # Environment variables
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

## How to Test
- Use tools like **Postman** or **cURL** to test the endpoints.
- Ensure you include the JWT token in the `Authorization` header for secured endpoints.

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Tokens](https://jwt.io/)
