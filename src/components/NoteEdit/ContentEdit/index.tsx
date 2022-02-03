import React from "react";

const ContentEdit: React.FC<{ content: string | undefined; }> = ({ content }) => {
  return (
    <textarea className="ContentEdit" value={content} />
  );
};

export default ContentEdit;
