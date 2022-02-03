import React from "react";
import { NotesProps } from "../../interfaces/interfaces";
import Button from "../Button";
import Note from "../Note";

const NotesList: React.FC<NotesProps> = ({ notes }) => (
  <div className="NotesList">
    <Button text="Nouvelle Note" callback={() => console.log("Nouvelle Note")} />
    {[...notes].map((note) => <Note note={note} key={note.key} />)}
  </div>
);

export default NotesList;
