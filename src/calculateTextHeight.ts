// Function to calculate text height dynamically considering container width
const calculateTextHeight = (
  text: string,
  fontSize: number,
  lineHeight: number,
  containerWidthInPixels = 8 * 96, // Default to A4 paper width in pixels
) => {
  // Create a temporary div element (hidden) to calculate the text height
  const tempElement = document.createElement("div");
  tempElement.style.position = "absolute";
  tempElement.style.visibility = "hidden";
  tempElement.style.fontSize = `${fontSize}px`; // Set the font size
  tempElement.style.lineHeight = `${lineHeight}px`; // Set the line height
  tempElement.style.whiteSpace = "pre-wrap"; // Preserve line breaks
  tempElement.style.width = `${containerWidthInPixels}px`; // Set the container width in pixels

  // Set the text content to the provided text
  tempElement.textContent = text;

  // Append the temporary element to the document body
  document.body.appendChild(tempElement);

  // Get the calculated height
  const height = tempElement.clientHeight;

  // Calculate the number of lines based on the height and line height
  const lineCount = Math.floor(height / lineHeight);

  // Remove the temporary element from the document body
  document.body.removeChild(tempElement);

  return { height, lineCount };
};

export default calculateTextHeight;
