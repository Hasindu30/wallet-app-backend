import express from "express"
import { sql } from "../config/db.js";
import {createTransaction, deleteTransaction, getSummarybyId, getTransactionsByUserId} from "../controller/transactionsController.js"

const router = express.Router();

router.get("/:userId",getTransactionsByUserId);

router.delete("/:id",createTransaction)

router.post("/",deleteTransaction);

router.get("/summary/:userId", getSummarybyId)

export default router;

