import React from "react";
import { EditProps, NoteObj } from "../../../interfaces/interfaces";

const ContentEdit: React.FC<EditProps> = ({ content, setNotes, noteKey }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNotes((oldNotes: NoteObj[]) => {
      const originalNotes = [...oldNotes];

      const note = originalNotes.splice(originalNotes.findIndex((n) => n.key === noteKey), 1)[0];

      note.content = event.target.value;

      return [...originalNotes, note];
    });
  };

  return (
    <textarea className="ContentEdit" value={content} onChange={handleChange} />
  );
};

export default ContentEdit;
