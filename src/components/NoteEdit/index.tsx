import React from "react";
import { NoteProps } from "../../interfaces/interfaces";
import ContentEdit from "./ContentEdit";
import TitleEdit from "./TitleEdit";

const NoteEdit: React.FC<NoteProps> = ({ note, setNotes }) => {
  if (!note) {
    return (
      <div className="NoteEdit">
        <input disabled />
        <textarea disabled />
      </div>
    );
  }
  return (
    <div className="NoteEdit">
      <TitleEdit content={note?.title} setNotes={setNotes} noteKey={note?.key} />
      <ContentEdit content={note?.content} setNotes={setNotes} noteKey={note?.key} />
    </div>
  );
};

export default NoteEdit;
