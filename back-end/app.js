import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get("/message", (req, res) => {
  res.json({ message: "Hello" });
});




const port = process.env.APP_PORT ?? 5000;


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

