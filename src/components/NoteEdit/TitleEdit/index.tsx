import React from "react";

const TitleEdit: React.FC<{ title: string | undefined; }> = ({ title }) => {
  return (
    <input className="TitleEdit" value={title} />
  );
};

export default TitleEdit;
