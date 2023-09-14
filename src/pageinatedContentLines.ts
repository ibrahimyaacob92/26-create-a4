import { ResumeLine } from "./contentRIchText";

const fontSizes = {
  header: 28,
  subheader: 20,
  text: 16,
};

const paginateContentLines = (
  contents: ResumeLine[],
  containerWidth: number,
  containerHeight: number,
) => {
  const pages: ResumeLine[][] = [];
  let currentPageLines: ResumeLine[] = [];
  let currentPageHeight = 0;

  contents.forEach((line, idx) => {
    // get height of the line
    const lineHeight = getComponentHeight(line, containerWidth);
    // check if appended line is larger than the container

    const appendedLineHeight = currentPageHeight + lineHeight;

    // Reached the end of line
    if (appendedLineHeight > containerHeight) {
      pages.push(currentPageLines);
      currentPageLines = [line];
      currentPageHeight = lineHeight;
    } else {
      // append to the list
      currentPageHeight = appendedLineHeight;
      currentPageLines.push(line);
    }
    if (currentPageLines.length && idx === contents.length - 1) {
      pages.push(currentPageLines);
    }
  });

  return pages;
};

export default paginateContentLines;

const textBaseLineType = [
  "header",
  "subheader",
  "text",
  "subtitle",
  "richText",
];

const getComponentHeight = (lineItem: ResumeLine, containerWidth: number) => {
  const lineType = lineItem.type;
  const lineContent = lineItem.contents[0];
  const fontSize =
    lineType === "header"
      ? fontSizes.header
      : lineType === "subheader"
      ? fontSizes.subheader
      : fontSizes.text;

  const lineHeight = fontSize;
  const margin = lineItem.marginBottom ?? 0;
  let height = 0;
  if (textBaseLineType.includes(lineType) && lineContent) {
    const tempElement = document.createElement("div");
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.fontSize = `${fontSize}px`; // Set the font size
    tempElement.style.lineHeight = `${lineHeight}px`; // Set the line height
    tempElement.style.whiteSpace = "pre-wrap"; // Preserve line breaks
    tempElement.style.width = `${containerWidth}px`; // Set the container width in pixels
    tempElement.style.height = "auto"; // Set height to auto to measure without constraints

    // Replace new lines with line breaks in the text content
    const textWithLineBreaks = (lineContent.content as string).replace(
      /\n/g,
      "<br />",
    );
    tempElement.innerHTML = textWithLineBreaks;

    // Append the temporary element to the document body
    document.body.appendChild(tempElement);

    // Get the calculated height
    height = tempElement.clientHeight;
    // margin bottom
    document.body.removeChild(tempElement);
  } else {
    height = (lineContent?.content as number) ?? 0;
  }

  return height + margin;
};
