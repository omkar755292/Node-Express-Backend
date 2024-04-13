# Personal Portfolio and Blog Website Backend

This repository contains the backend code for a personal portfolio and blog website. The backend is built using Node.js, Express.js, and MongoDB, providing REST API endpoints for managing blogs, projects, contacts, user authentication, and more.

## Key Features

- **Error Handling:** Robust error handling and clear messages.
- **Authentication:** JWT-based user authentication with registration and login.
- **Protected Routes:** Middleware for authentication and role-based access control.
- **CORS:** Configured cross-origin request support with customizable settings.

## API Endpoints

### Blogs

- **GET /api/blog**: Retrieve all blogs.
- **POST /api/blog**: Create a new blog (authentication required).
- **GET /api/blog/:id**: Retrieve a specific blog by ID.
- **PUT /api/blog/:id**: Update a blog by ID (authentication required).
- **DELETE /api/blog/:id**: Delete a blog by ID (authentication required).
- **DELETE /api/blog**: Delete all blogs (authentication required).

### Projects

- **GET /api/project**: Retrieve all projects.
- **POST /api/project**: Create a new project (authentication required).
- **GET /api/project/:id**: Retrieve a specific project by ID.
- **PUT /api/project/:id**: Update a project by ID (authentication required).
- **DELETE /api/project/:id**: Delete a project by ID (authentication required).
- **DELETE /api/project**: Delete all projects (authentication required).

### Contacts

- **GET /api/contact**: Retrieve all contacts (authentication required).
- **POST /api/contact**: Create a new contact.
- **GET /api/contact/:id**: Retrieve a specific contact by ID (authentication required).
- **PUT /api/contact/:id**: Update a contact by ID (authentication required).
- **DELETE /api/contact/:id**: Delete a contact by ID (authentication required).
- **DELETE /api/contact**: Delete all contacts (authentication required).

### Authentication

- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Login with existing user credentials.
- **GET /api/user/root**: Retrieve user details (authentication required).

## Deployment

The project is deployed on AWS EC2 using continuous integration and deployment (CI/CD) with GitHub Actions for automated testing and deployment.

## Testing

- Backend API Testing: Unit tests for API endpoints, integration tests for database interactions.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/omkar755292/The-Irritated-Saiyan.git
   cd The-Irritated-Saiyan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Variables: Create a .env file in the root directory and specify the following configuration variables:

   ```bash
   HOSTNAME=localhost
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ```

4. Start Project:
   ```bash
   npm start
   ```

## Contact Information
For inquiries, collaborations, or feedback, contact [omkar panchal](mailto:omkarpanchal.cse@gmail.com).
