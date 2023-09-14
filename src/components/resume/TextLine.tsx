import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
  isApart?: boolean;
  marginBottom?: number;
};

const TextLine = ({ contents, isApart, marginBottom }: Props) => {
  return (
    <p
      className={isApart ? "flex justify-between" : ""}
      style={{ marginBottom: `${marginBottom ?? 0}px` }}
    >
      {contents.map((i, idx) => {
        if (i.href) {
          return (
            <a href={i.href} key={idx} style={{ color: "blue" }}>
              {i.content}
            </a>
          );
        } else {
          return <span key={idx}>{i.content}</span>;
        }
      })}
    </p>
  );
};

export default TextLine;
