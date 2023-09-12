# API Documentation

## Overview

This document provides information on how to use the API endpoints, standard request and response formats, sample usage, and instructions for setting up and deploying the API.

### Base URL

```
https://hng-stage2-f8a4.onrender.com/api
```

## Endpoints

### 1. Create a Person

#### Endpoint

```
POST /
```

#### Request Format

- **Request Body:**

```json
{
  "name": "John Doe",
  "value": "Some Value"
}
```

#### Response Format

- **Success Response (HTTP Status Code: 201 Created):**

```json
{
  "id": 1,
  "name": "John Doe",
  "value": "Some Value"
}
```

- **Error Response (HTTP Status Code: 400 Bad Request):**

```json
{
  "error": "Name and value must be strings"
}
```

### 2. Get a Person by ID

#### Endpoint

```
GET /:id
```

#### Request Format

- **URL Parameters:**

  - `id` (integer) - The ID of the person to retrieve.

#### Response Format

- **Success Response (HTTP Status Code: 200 OK):**

```json
{
  "id": 1,
  "name": "John Doe",
  "value": "Some Value"
}
```

- **Error Response (HTTP Status Code: 404 Not Found):**

```json
{
  "error": "Person with given ID not found"
}
```

### 3. Update a Person by ID

#### Endpoint

```
PUT /:id
```

#### Request Format

- **URL Parameters:**

  - `id` (integer) - The ID of the person to update.

- **Request Body:**

```json
{
  "name": "Updated Name",
  "value": "Updated Value"
}
```

#### Response Format

- **Success Response (HTTP Status Code: 200 OK):**

```json
{
  "message": "Person updated successfully",
  "updatedDetails": {
    "id": 1,
    "name": "Updated Name",
    "value": "Updated Value"
  }
}
```

- **Error Response (HTTP Status Code: 404 Not Found):**

```json
{
  "error": "Person not found"
}
```

### 4. Delete a Person by ID

#### Endpoint

```
DELETE /:id
```

#### Request Format

- **URL Parameters:**

  - `id` (integer) - The ID of the person to delete.

#### Response Format

- **Success Response (HTTP Status Code: 200 OK):**

```json
{
  "message": "User deleted successfully",
  "deleted_user": {
    "id": 1,
    "name": "Updated Name",
    "value": "Updated Value"
  }
}
```

- **Error Response (HTTP Status Code: 404 Not Found):**

```json
{
  "error": "Person not found"
}
```

## Sample Usage

Here are some sample requests and expected responses using postman:

### Create a Person

**Request:**

```http
POST https://hng-stage2-f8a4.onrender.com/api

Content-Type: raw/json

{
  "name": "John Doe",
  "value": "Some Value"
}
```

**Response (201 Created):**

```json
{
  "id": 1,
  "name": "John Doe",
  "value": "Some Value"
}
```

### Get a Person by ID

**Request:**

```http
GET https://hng-stage2-f8a4.onrender.com/api/1
```

**Response (200 OK):**

```json
{
  "id": 1,
  "name": "John Doe",
  "value": "Some Value"
}
```

### Update a Person by ID

**Request:**

```http
PUT https://hng-stage2-f8a4.onrender.com/api/1
Content-Type: raw/json

{
  "name": "Updated Name",
  "value": "Updated Value"
}
```

**Response (200 OK):**

```json
{
  "message": "Person updated successfully",
  "updatedDetails": {
    "id": 1,
    "name": "Updated Name",
    "value": "Updated Value"
  }
}
```

### Delete a Person by ID

**Request:**

```http
DELETE https://hng-stage2-f8a4.onrender.com/api/1
```

**Response (200 OK):**

```json
{
  "message": "User deleted successfully",
  "deleted_user": {
    "id": 1,
    "name": "Updated Name",
    "value": "Updated Value"
  }
}
```

## Known Limitations

- This API does not include authentication and authorization mechanisms. Consider implementing them for production use.

## Setup and Deployment

To set up and deploy the API locally or on a server, follow these steps:

1. Clone the repository: `git clone https://github.com/olurocks/stage2.git`

2. Install dependencies: `npm install`

3. Configure your database connection settings in a `.env` file.

4. Start the API: `npm start`

5. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port you specified in your environment variables.

6. Deploy the API to your preferred hosting service or cloud platform following their deployment guidelines.

---

This documentation file provides an overview of the API endpoints, request/response formats, sample usage, known limitations, and setup/deployment instructions. Users can refer to this documentation to interact with the API effectively.
