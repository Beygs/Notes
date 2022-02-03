import React, { useEffect, useState } from "react";
import { NoteProps } from "../../interfaces/interfaces";
import NoteToMarkdown from "../NoteToMarkdown";

const NoteDisplay: React.FC<NoteProps> = ({ note }) => {
  const [formattedContent, setFormattedContent] = useState<string | null>(null);

  useEffect(() => {
    if (note) {
      setFormattedContent(NoteToMarkdown(note.content));
    }
  }, [note]);

  if (formattedContent !== null) {
    return (
      <div className="NoteDisplay">
        <h1 className="title">{note?.title}</h1>
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
      <p>Loading...</p>
    </div>
  );
};

export default NoteDisplay;
