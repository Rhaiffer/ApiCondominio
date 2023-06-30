This project is a condominium management app that enables communication between residents, administrators, and security personnel. It helps in sharing notices, internal regulations, and booking common spaces. The app is built using Nest.js, JWT, and Passport for user authentication.

To set up the project, follow these steps:

```bash
Install Node.js and MongoDB on your system.

Clone the project repository from GitHub.

Run "npm install" to install all the required dependencies.

Create a ".env" file in the root directory and add the environment variables for MongoDB connection and JWT secret key.

Run "npm start" to start the server.
```
The project structure follows the Nest.js framework, with separate modules for users, notices, regulations, and bookings. Passport.js module is used for user authentication, with JWT strategy for token-based authentication. The app uses MongoDB for data storage, with Mongoose as the ODM.

For more details on Nest.js, JWT, and Passport authentication, you can refer to the following tutorials:


"Implementing JWT User Authentication in NestJS" [1]

"User Authentication with Passport.js in Nest.js" [2]

"Creating a Nest.js App with JWT" [3]

References:
[1] How to implement JWT authentication in NestJS
[2] Nest.js Step-by-Step: Part 3 (Users and Authentication)
[3] How to Build a Nest.js JWT Authentication API
