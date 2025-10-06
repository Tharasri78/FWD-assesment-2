import Notes from "../model/notes.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find({});
    return res.json(notes);
  } catch (error) {
    console.log(error);
  }
};

export const createNotes = async (req, res) => {
  try {
    const { notesTitle, description, username, userDep, subject } = req.body;

    await Notes.create({ notesTitle, description, username, userDep, subject });

    console.log(notesTitle, description, username, userDep, subject);

    return res.json({ messsage: "Done" });
  } catch (error) {
    console.log(error);
  }
};

export const editNotes = async (req, res) => {
  try {
    const { notesTitle, description, username, userDep, subject } = req.body;
    const { id } = req.params;
    const editNotes = await Notes.findById(id);
    editNotes.notesTitle = notesTitle;
    editNotes.description = description;
    editNotes.username = username;
    editNotes.userDep = userDep;
    editNotes.subject = subject;

    await editNotes.save();
    return res.json({ message: "Notes edited successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const editNotes = await Notes.deleteOne({ _id: id });

    return res.json({ message: "Notes deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
