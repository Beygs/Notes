import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { NoteObj, NoteProps } from "../../interfaces/interfaces";
import NoteToMarkdown from "../NoteToMarkdown";

const Note: React.FC<NoteProps> = ({ note, setSelectedNote, setNotes }) => {
  const [formattedContent, setFormattedContent] = useState("");

  useEffect(() => {
    let htmlContent = "";

    if (note) htmlContent = NoteToMarkdown(note.content);

    setFormattedContent(htmlContent.replace(/<[^>]+>/g, ""));
  }, [note?.content]);

  const handleClick = (): void => {
    setSelectedNote(note?.key);
  };

  const handleDelete = (): void => {
    setNotes((oldNotes: NoteObj[]) => {
      const originalNotes = [...oldNotes];

      originalNotes.splice(originalNotes.findIndex((n) => n.key === note?.key), 1);

      return originalNotes;
    });
  };

  return (
    <div role="menuitem" tabIndex={0} className="Note" onClick={handleClick}>
      <FontAwesomeIcon icon={faTimes} onClick={handleDelete} />
      <h3>{note?.title}</h3>
      <p>{formattedContent}</p>
    </div>
  );
};

export default Note;
