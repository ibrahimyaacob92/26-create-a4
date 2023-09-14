import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
  marginBottom?: number;
};

const Subtitle = ({ contents, marginBottom }: Props) => {
  return (
    <div style={{ marginBottom: `${marginBottom ?? 0}px`, color: "gray" }}>
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
    </div>
  );
};

export default Subtitle;
