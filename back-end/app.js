import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {getMovies, getMovieById, postMovies, updateMovies, deleteMovie} from './src/controllers/movieHandlers.js';
import { getUsers, getUserById, postUsers, updateUser, deleteUser } from './src/controllers/userHandlers.js';
// import { hashPassword } from "./src/middlewares/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);
app.get("/api/movies", getMovies);
app.get("/api/movies/:id", getMovieById);
app.get("/api/users", getUsers);
app.get("/api/users/:id", getUserById);

app.post("/api/movies", postMovies);
app.post("/api/users", postUsers);
// app.post("/api/users", hashPassword, postUsers);

app.put("/api/movies/:id", updateMovies);
app.put("/api/users/:id", updateUser);
// app.put("/api/users/:id", hashPassword, updateUser);

app.delete("/api/movies/:id", deleteMovie);
app.delete("/api/users/:id", deleteUser);


const port = process.env.APP_PORT ?? 5000;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
