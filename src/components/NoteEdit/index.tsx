import React from "react";
import { NoteProps } from "../../interfaces/interfaces";
import Button from "../Button";
import ContentEdit from "./ContentEdit";
import TitleEdit from "./TitleEdit";

const NoteEdit: React.FC<NoteProps> = ({ note }) => {
  return (
    <div className="NoteEdit">
      <TitleEdit title={note?.title} />
      <ContentEdit content={note?.content} />
      <Button text="Enregistrer les changements" callback={() => console.log("Save")} />
    </div>
  );
};

export default NoteEdit;
