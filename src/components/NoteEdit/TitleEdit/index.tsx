import React from "react";

const TitleEdit: React.FC<{ title: string; }> = ({ title }) => {
  return (
    <input className="TitleEdit" value={title} />
  );
};

export default TitleEdit;
