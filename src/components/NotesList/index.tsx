import React from "react";
import { NotesProps } from "../../interfaces/interfaces";
import Note from "../Note";

const NotesList: React.FC<NotesProps> = ({ notes }) => (
  <div className="NotesList">
    {[...notes].map((note) => <Note note={note} key={note.key} />)}
  </div>
);

export default NotesList;
