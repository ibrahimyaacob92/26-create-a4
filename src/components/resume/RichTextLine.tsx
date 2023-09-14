import React from "react";

type Props = {
  contents: { content: string | number; href?: string }[];
  marginBottom?: number;
};

const RichTextLine = ({ contents, marginBottom }: Props) => {
  const richText = contents[0]?.content as string;
  return (
    <div
      style={{ marginBottom: `${marginBottom ?? 0}px` }}
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );
};

export default RichTextLine;
