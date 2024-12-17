import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();

const port = process.env.PORT || 4000 ;

app.use(express.json());
app.use(cookieParser());

app.get("/" , (req , res) => (
    res.send("Hello world")
));

app.listen(port , ()=> console.log(`listening port ${port}`));