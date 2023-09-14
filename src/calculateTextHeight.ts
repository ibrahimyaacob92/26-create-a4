// Function to calculate text height dynamically considering container width
const calculateTextHeight = (
  text: string,
  fontSize: number,
  lineHeight: number,
  containerWidthInPixels = 8 * 96, // Default to A4 paper width in pixels
  containerHeightInPixels?: number, // Optional container height in pixels
) => {
  // Create a temporary div element (hidden) to calculate the text height
  const tempElement = document.createElement("div");
  tempElement.style.position = "absolute";
  tempElement.style.visibility = "hidden";
  tempElement.style.fontSize = `${fontSize}px`; // Set the font size
  tempElement.style.lineHeight = `${lineHeight}px`; // Set the line height
  tempElement.style.whiteSpace = "pre-wrap"; // Preserve line breaks
  tempElement.style.width = `${containerWidthInPixels}px`; // Set the container width in pixels
  tempElement.style.height = "auto"; // Set height to auto to measure without constraints

  // Replace new lines with line breaks in the text content
  const textWithLineBreaks = text.replace(/\n/g, "<br />");
  tempElement.innerHTML = textWithLineBreaks;

  // Append the temporary element to the document body
  document.body.appendChild(tempElement);

  // Get the calculated height
  const height = tempElement.clientHeight;

  // Calculate the number of lines based on the height and specified line height
  const lineCount = Math.floor(height / lineHeight);

  // Remove the temporary element from the document body
  document.body.removeChild(tempElement);

  // Check if the text height exceeds the container height
  if (containerHeightInPixels && height > containerHeightInPixels) {
    const paginatedTexts: string[] = [];
    const lines = text.split("\n"); // Split text into lines

    let currentPageHeight = 0;
    let currentPageLines: string[] = [];

    for (const line of lines) {
      let lineHeightInPixels = calculateTextHeight(
        line,
        fontSize,
        lineHeight, // Use the specified lineHeight here
        containerWidthInPixels,
      ).height;

      lineHeightInPixels = line === "" ? lineHeight : lineHeightInPixels;
      // Check if adding this line exceeds the container height
      if (currentPageHeight + lineHeightInPixels <= containerHeightInPixels) {
        currentPageHeight += lineHeightInPixels;
        currentPageLines.push(line);
      } else {
        paginatedTexts.push(currentPageLines.join("\n")); // Add the current page to paginatedTexts
        currentPageHeight = lineHeightInPixels;
        currentPageLines = [line];
      }
    }

    // Add any remaining lines to the last page
    if (currentPageLines.length > 0) {
      paginatedTexts.push(currentPageLines.join("\n"));
    }

    return { height, lineCount, paginatedTexts };
  }

  // If the text does not exceed the container height, return the height and line count
  return { height, lineCount };
};

export default calculateTextHeight;
