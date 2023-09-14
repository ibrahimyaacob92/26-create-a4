import { ReactNode, useEffect, useRef, useState } from "react";
import { contentShort } from "~/content";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useReactToPrint } from "react-to-print";
import calculateTextHeight from "~/calculateTextHeight";

// * MAKING THE PAGE DYNAMIC
const Page = () => {
  const [a4Width, setA4Width] = useState<number>();
  const [content, setContent] = useState(contentShort);
  const componentRef = useRef<HTMLDivElement>(null);
  const [triggerPrint, setTriggerPrint] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const [lineCount, setLineCount] = useState(0);

  const scale = a4Width ? a4Width / 800 : 1;

  // Toggle Print Mode Styling
  const [printMode, setPrintMode] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
    onAfterPrint: () => {
      setTriggerPrint(false);
      setPrintMode(false);
    },
  });

  // Open the modal
  useEffect(() => {
    if (triggerPrint) {
      handlePrint();
    }
  }, [triggerPrint]);

  useEffect(() => {
    const fontSize = 16; // Adjust to your font size
    const lineHeight = 1.5; // Adjust to your line height

    const { height, lineCount } = calculateTextHeight(
      content,
      fontSize,
      fontSize * lineHeight,
    );
    setTextHeight(height);
    setLineCount(lineCount);
  }, [content]);

  return (
    <div className="h-screen">
      <Allotment
        onChange={(size) => setA4Width(size[1] ? size[1] - 44 : undefined)}
      >
        <Allotment.Pane>
          <div className="h-screen ">
            <p>A4 section width: {a4Width}</p>
            <p>A4 section scale: {scale}</p>
            <p>Line Count: {lineCount}</p>
            <p>Text Height: {textHeight}</p>
            <p>Print Mode: {printMode ? "True" : "False"}</p>
            <textarea
              className="m-2  h-[400px] w-[calc(100%-20px)] border p-2 text-sm"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <div className="flex justify-end px-2.5">
              <button
                className="rounded-sm border p-2"
                onClick={() => {
                  setPrintMode(true);
                  setTriggerPrint(true);
                }}
              >
                Save to PDF
              </button>
            </div>
          </div>
        </Allotment.Pane>
        <Allotment.Pane>
          <div className="flex h-screen overflow-scroll overflow-x-hidden bg-slate-100 p-4">
            <div
              id="book"
              className="my-4"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: `0 0`,
              }}
            >
              <div
                ref={componentRef}
                className={!printMode ? "flex flex-col gap-4" : ""}
              >
                <A4PageContainer printMode={printMode}>
                  {content}
                </A4PageContainer>
                <A4PageContainer printMode={printMode}>
                  {contentShort}
                </A4PageContainer>
                <A4PageContainer printMode={printMode}>
                  {contentShort}
                </A4PageContainer>
              </div>
              <br />
            </div>
          </div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};

export default Page;

// ? THird try play with scale
const A4PageContainer = ({
  children,
  printMode,
}: {
  children: ReactNode;
  printMode: boolean;
}) => {
  return (
    <div
      style={{
        minHeight: "11.7in",
        width: "8.3in",
        overflowY: "hidden",
      }}
      className={`whitespace-pre-wrap bg-white p-4 ${
        !printMode ? "shadow-md" : ""
      } `}
    >
      {children}
    </div>
  );
};
