import React, { useEffect, useState } from "react";
import { NoteProps } from "../../interfaces/interfaces";
import NoteToMarkdown from "../NoteToMarkdown";

const Note: React.FC<NoteProps> = ({ note }) => {
  const [formattedContent, setFormattedContent] = useState("");

  useEffect(() => {
    const htmlContent = NoteToMarkdown(note.content);

    setFormattedContent(htmlContent.replace(/<[^>]+>/g, ""));
  }, []);

  return (
    <div className="Note">
      <h3>{note.title}</h3>
      <p>{formattedContent}</p>
    </div>
  );
};

export default Note;
