Personal Portfolio and Blog Website Backend
This is the backend for a personal portfolio and blog website built using Node.js, Express.js, and MongoDB. It provides REST API endpoints for managing blogs, projects, contacts, and more.


API Endpoints

Blogs
GET /api/blog: Get all blogs.
POST /api/blog: Create a new blog.
GET /api/blog/:id: Get a specific blog by ID.
PUT /api/blog/:id: Update a blog by ID.
DELETE /api/blog/:id: Delete a blog by ID.
DELETE /api/blog: Delete all blogs.

Projects
GET /api/project: Get all projects.
POST /api/project: Create a new project.
GET /api/project/:id: Get a specific project by ID.
PUT /api/project/:id: Update a project by ID.
DELETE /api/project/:id: Delete a project by ID.
DELETE /api/project: Delete all projects.

Contacts
GET /api/contact: Get all contacts.
POST /api/contact: Create a new contact.
GET /api/contact/:id: Get a specific contact by ID.
PUT /api/contact/:id: Update a contact by ID.
DELETE /api/contact/:id: Delete a contact by ID.
DELETE /api/contact: Delete all contacts.