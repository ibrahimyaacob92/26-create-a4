import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
  marginBottom?: number;
};

const HeaderLine = ({ contents, marginBottom }: Props) => {
  return (
    <h1
      className="text-xl font-bold"
      style={{ marginBottom: `${marginBottom ?? 0}px` }}
    >
      {contents.map((i, idx) => (
        <span key={idx}>{i.content}</span>
      ))}
    </h1>
  );
};

export default HeaderLine;
