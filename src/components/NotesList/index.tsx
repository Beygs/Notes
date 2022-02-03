import React from "react";
import { NoteObj, NotesProps } from "../../interfaces/interfaces";
import Button from "../Button";
import Note from "../Note";

const NotesList: React.FC<NotesProps> = ({
  notes,
  setNotes,
  setSelectedNote,
}) => {
  const newNote = (): void => {
    const note: NoteObj = {
      title: "Sans titre",
      content: "",
      key: new Date().getTime(),
    };

    setNotes((oldNotes: NoteObj[]) => [...oldNotes, note]);
  };

  return (
    <div className="NotesList">
      <Button text="Nouvelle Note" callback={newNote} />
      {[...notes].map((note) => (
        <Note note={note} key={note.key} setSelectedNote={setSelectedNote} />
      ))}
    </div>
  );
};

export default NotesList;
