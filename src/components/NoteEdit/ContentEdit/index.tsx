import React from "react";

const ContentEdit: React.FC<{ content: string; }> = ({ content }) => {
  return (
    <textarea className="ContentEdit" value={content} />
  );
};

export default ContentEdit;
