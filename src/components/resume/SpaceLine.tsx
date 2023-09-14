import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
};

const SpaceLine = ({ contents }: Props) => {
  const height = contents[0]?.content ?? 0;
  return (
    <div
      style={{
        height: `${height ?? 0}px`,
      }}
    />
  );
};

export default SpaceLine;
