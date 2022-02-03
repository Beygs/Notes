import React, { useEffect, useState } from "react";
import { NoteProps } from "../../interfaces/interfaces";
import NoteToMarkdown from "../NoteToMarkdown";

const NoteDisplay: React.FC<NoteProps> = ({ note }) => {
  const [formattedContent, setFormattedContent] = useState<string | null>(null);

  useEffect(() => {
    if (note) {
      setFormattedContent(NoteToMarkdown(note.content));
    }
  }, [note?.content]);

  if (formattedContent !== null && note) {
    return (
      <div className="NoteDisplay">
        <h1 className="title">{note.title}</h1>
        <div
          className="content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: formattedContent,
          }}
        />
      </div>
    );
  }

  return (
    <div className="NoteDisplay">
      <p>
        Cliques sur&nbsp;
        <strong>Nouvelle Note&nbsp;</strong>
        pour commencer ! 🖊️
      </p>
    </div>
  );
};

export default NoteDisplay;
