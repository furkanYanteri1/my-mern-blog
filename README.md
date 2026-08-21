# my-mern-blog

A full stack MERN application: an Express and MongoDB API paired with a React client.

## Stack

| Layer | Tools |
|---|---|
| Client | React, Vite, React Router, Tailwind CSS, Flowbite React, React Icons |
| API | Node.js, Express, MongoDB, Mongoose |
| Auth | bcryptjs password hashing |

## Structure

```
api/
  controllers/   request handlers
  models/        Mongoose schemas
  routes/        route definitions
  utils/         shared error helper
  index.js       server entry point
client/
  src/tabs/      Home, About, Projects, Dashboard, SignIn, SignUp
  src/components/
```

## API

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/auth/signup` | Create a user, password hashed with bcrypt |
| GET | `/api/user/test` | Health check |

A single Express error middleware normalizes every failure into a JSON response carrying a status code and a message, so controllers can throw and stay short.

## Running it

The API reads `MONGO_URI` from a `.env` file in the project root.

```bash
npm install
npm run serve-dev          # API on port 3000, with nodemon

cd client
npm install
npm run dev                # client on the Vite dev server
```

## Status

Work in progress. The client shell, routing and the signup flow are in place. Post creation and the dashboard are not finished.
