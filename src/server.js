import express from "express";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionsRoute.js"
import { initDB } from "./config/db.js";

dotenv.config();

const app = express();

//midleware
app.use(rateLimiter);
app.use(express.json());

const PORT=process.env.PORT || 5001;



app.use("/api/transactions",transactionRoute)



initDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("server is running on PORT:",PORT);
});
})