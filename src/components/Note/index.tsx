import React, { useEffect, useState } from "react";
import { NoteProps } from "../../interfaces/interfaces";
import NoteToMarkdown from "../NoteToMarkdown";

const Note: React.FC<NoteProps> = ({ note, setSelectedNote }) => {
  const [formattedContent, setFormattedContent] = useState("");

  useEffect(() => {
    let htmlContent = "";

    if (note) htmlContent = NoteToMarkdown(note.content);

    setFormattedContent(htmlContent.replace(/<[^>]+>/g, ""));
  }, []);

  const handleClick = (): void => {
    setSelectedNote(note?.key);
  };

  return (
    <div role="menuitem" tabIndex={0} className="Note" onClick={handleClick}>
      <h3>{note?.title}</h3>
      <p>{formattedContent}</p>
    </div>
  );
};

export default Note;
