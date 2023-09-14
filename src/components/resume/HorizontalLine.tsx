import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
  marginBottom?: number;
};

const HorizontalLine = ({ contents, marginBottom }: Props) => {
  const height = contents[0]?.content ?? 1;
  return (
    <hr
      style={{
        borderTop: `solid ${height}px`,
        borderColor: "darkgray",
        borderBottom: "none",
        marginBottom: `${marginBottom ?? 0}px`,
      }}
    />
  );
};

export default HorizontalLine;
