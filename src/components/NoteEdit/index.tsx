import React from "react";
import { NoteProps } from "../../interfaces/interfaces";
import Button from "../Button";
import ContentEdit from "./ContentEdit";
import TitleEdit from "./TitleEdit";

const NoteEdit: React.FC<NoteProps> = ({ note, setNotes }) => (
  <div className="NoteEdit">
    <TitleEdit content={note?.title} setNotes={setNotes} noteKey={note?.key} />
    <ContentEdit content={note?.content} setNotes={setNotes} noteKey={note?.key} />
    <Button text="Enregistrer les changements" callback={() => console.log("Save")} />
  </div>
);

export default NoteEdit;
