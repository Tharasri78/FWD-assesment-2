import { Router } from "express";
import {
  createNotes,
  deleteNotes,
  editNotes,
  getAllNotes,
} from "../controller/notes.controller.js";

const app = Router();

app.get("/", getAllNotes).post("/", createNotes);

app.patch(`/:id`, editNotes).delete("/:id", deleteNotes);

export default app;
