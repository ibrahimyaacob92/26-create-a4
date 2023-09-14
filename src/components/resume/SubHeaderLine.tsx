import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
  marginBottom?: number;
};

const SubHeaderLine = ({ contents, marginBottom }: Props) => {
  return (
    <h2
      className="text-lg font-bold"
      style={{ marginBottom: `${marginBottom ?? 0}px` }}
    >
      {contents.map((i, idx) => (
        <span key={idx}>{i.content}</span>
      ))}
    </h2>
  );
};

export default SubHeaderLine;
