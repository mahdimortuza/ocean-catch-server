# Ocean Catch Server

## Description

Welcome to the **Ocean Catch Server** project! This repository contains the server-side code for our sea-food selling Ocean Catch e-commerce application. This README file provides guidelines on how to run this project. Please make sure to follow these instructions to maintain a consistent and efficient development process.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mahdimortuza/ocean-catch-server.git
   ```
2. Navigate to the project directory
   ```bash
   cd ocean-catch-server
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Set up the environment variables (see [Environment Variables](#environment-variables))
5. Start the server
   ```bash
   npm run start:dev
   ```

## Scripts

## Running the server

### To build the server, use:

```bash
npm run build
```

### To start the server in development mode, use:

```bash
npm run start:dev
```

### To start the server in production mode, use:

```bash
npm run start:prod
```

### To fix code using ESlint, use:

```bash
npm run lint:fix
```

### To fix code using Prettier, use:

```bash
npm run prettier:fix
```

## Environment Variables

### Setup your environment variables in the .env.example file and rename the file to .env

- `NODE_DEV`=development
- `PORT`=Port number the server listens on. Default: 5000
- `DATABASE_URL`=URI for MongoDB database.

# API Documentation

## User auth endpoints

- API Endpoints:

  - POST `/api/v1/auth/login`

    - Description: Logins admin to manage product data.
    - Request:
      ```json
      {
        "email": "example@gmail.com",
        "password": "123456"
      }
      ```

  - POST `/api/v1/auth//refresh-token`

    - Description: Get refresh token (all user can do this).

  - POST `/api/v1/user/register`

    - Description: Create user (only admin can do this).

      - Request:

        ```json
        {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "password": "123",
          "role": "user"
        }
        ```

  - POST `/api/v1/user/me`

    - Description: Create user (all user have access on this).

  - POST `/api/v1/products/create-product`

    - Description: Post method to create a product.

      - Request:

        ```json
        {
          "title": "Sample Product",
          "image": "http://example.com/image.jpg",
          "optImage1": "http://example.com/optImage1.jpg",
          "optImage2": "http://example.com/optImage2.jpg",
          "optImage3": "http://example.com/optImage3.jpg",
          "price": 29.99,
          "category": "Electronics",
          "ratings": 4.5,
          "description": "This is a sample product description.",
          "flashSale": true,
          "offer": 10
        }
        ```

  - GET `/api/v1/products`

    - Description: Public endpoint. Get all the products.

  - GET `/api/v1/products/:id`

    - Description: Public endpoint. Get single product.

  - PATCH `/api/v1/products/:id`

    - Description: Update single the product (only admin has access).

  - DELETE `/api/v1/products/:id`
    - Description: Delete single the product (only admin has access).

# Dependencies:

- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongoose`: MongoDB driver for Node.js.
- `cookie-parser`: To send token to client.
- `http-status`: HTTP status sends status code in response.
- `zod`: Zod is a JavaScript validation library.

# Tests

- No test cases are written yet.

# Contributing

- Contribution policy will be provided letter.

# License

Copyright (c) 2024, Mahdi Mortuza

All rights reserved. This software and associated documentation files may not be used, copied, modified, merged, published, distributed, sublicensed, and/or sold, in any manner, without the prior written permission of the copyright owner.
