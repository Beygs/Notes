import React from "react";
import { NoteProps } from "../../interfaces/interfaces";

const Note: React.FC<NoteProps> = ({ note }) => (
  <div className="Note">
    <h3>{note.title}</h3>
    <p>{note.content}</p>
  </div>
);

export default Note;
