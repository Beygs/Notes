import React from "react";
import { EditProps, NoteObj } from "../../../interfaces/interfaces";

const TitleEdit: React.FC<EditProps> = ({ content, setNotes, noteKey }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNotes((oldNotes: NoteObj[]) => {
      const originalNotes = [...oldNotes];

      const note = originalNotes.splice(originalNotes.findIndex((n) => n.key === noteKey), 1)[0];

      note.title = event.target.value;

      return [...originalNotes, note];
    });
  };

  return (
    <input className="TitleEdit" value={content} onChange={handleChange} />
  );
};

export default TitleEdit;
