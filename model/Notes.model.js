import { Schema, model } from "mongoose";

const notesSchema = new Schema({
  notesTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

  userDep: {
    type: String,
    required: true,
    enum: ["CSE", "AIDS", "CSBS", "ECE"],
  },
  subject: {
    type: String,
    required: true,
  },
});

const Notes = model("Notes", notesSchema);
export default Notes;
