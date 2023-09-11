# stage2

# Person API

This API allows you to perform CRUD (Create, Read, Update, Delete) operations on Person objects. You can interact with this API to manage information about individuals.

## Getting Started

Before you begin, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- A database configured and connected. This API uses Sequelize to interact with the database, so make sure to set up your database accordingly.

## Installation

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

3. Install the required dependencies.

```bash
npm install
```

4. Configure your database connection by editing the `config/config.json` file to match your database credentials.

5. Create the database tables by running the Sequelize migration:

```bash
npx sequelize db:migrate
```

6. Start the server.

```bash
npm start
```

## Endpoints

### Create a Person

- **Endpoint**: `POST /`
- **Description**: Create a new person with a name and a value.
- **Request Body**:

```json
{
  "name": "John Doe",
  "value": "42"
}
```

- **Response**:

```json
{
  "id": 1,
  "name": "John Doe",
  "value": "42",
  "createdAt": "2023-09-11T00:00:00.000Z",
  "updatedAt": "2023-09-11T00:00:00.000Z"
}
```

### Get a Person by ID

- **Endpoint**: `GET /:id`
- **Description**: Retrieve a person by their ID.
- **Response**:

```json
{
  "id": 1,
  "name": "John Doe",
  "value": "42",
  "createdAt": "2023-09-11T00:00:00.000Z",
  "updatedAt": "2023-09-11T00:00:00.000Z"
}
```

### Update a Person by ID

- **Endpoint**: `PUT /:id`
- **Description**: Update a person's name and value by their ID.
- **Request Body**:

```json
{
  "name": "Updated Name",
  "value": "43"
}
```

- **Response**:

```json
{
  "message": "Person updated successfully"
}
```

### Delete a Person by ID

- **Endpoint**: `DELETE /:id`
- **Description**: Delete a person by their ID.
- **Response**:

```json
{
  "message": "User deleted successfully",
  "deleted_user": {
    "id": 1,
    "name": "John Doe",
    "value": "42",
    "createdAt": "2023-09-11T00:00:00.000Z",
    "updatedAt": "2023-09-11T00:00:00.000Z"
  }
}
```

## Error Handling

- If the provided ID does not exist, you will receive a `404 Not Found` response.
- If the request body does not contain valid name and value fields, you will receive a `400 Bad Request` response.
- If there is an internal server error, you will receive a `500 Internal Server Error` response.
