import { type ReactNode, useEffect, useRef, useState } from "react";
import { contentShort } from "~/content";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useReactToPrint } from "react-to-print";
import calculateTextHeight from "~/calculateTextHeight";
import richContent, { ResumeLine } from "~/contentRIchText";
import HeaderLine from "~/components/resume/HeaderLine";
import TextLine from "~/components/resume/TextLine";
import HorizontalLine from "~/components/resume/HorizontalLine";
import Subtitle from "~/components/resume/Subtitle";
import SubHeaderLine from "~/components/resume/SubHeaderLine";
import RichTextLine from "~/components/resume/RichTextLine";
import SpaceLine from "~/components/resume/SpaceLine";
import paginateContentLines from "~/pageinatedContentLines";

// need to figure out the numbers
const A4Margin = 32;
const contentLineWidth = "A4 width - margin";
const pageHeight = "A4 page height - margin";

// * MAKING THE PAGE DYNAMIC
const Page = () => {
  const [a4SectionWidth, setA4SectionWidth] = useState<number>();
  const [content, setContent] = useState(richContent);
  const [paginatedContent, setPaginatedContent] = useState<ResumeLine[][]>();

  const componentRef = useRef<HTMLDivElement>(null);
  const [triggerPrint, setTriggerPrint] = useState(false);

  const scale = a4SectionWidth ? a4SectionWidth / 800 : 1; // idk why 800 works

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
    const pages = paginateContentLines(content, 8 * 96, 700 - A4Margin);

    setPaginatedContent(pages);
  }, [content]);

  return (
    <div className="h-screen">
      <Allotment
        onChange={(size) =>
          setA4SectionWidth(size[1] ? size[1] - 44 : undefined)
        }
      >
        <Allotment.Pane>
          <div className="h-screen ">
            <div className="m-2">
              <p>A4 section width: {a4SectionWidth}</p>
              <p>A4 section scale: {scale}</p>
              <p>Print Mode: {printMode ? "True" : "False"}</p>
            </div>
            <div className="m-2 max-h-[500px] overflow-y-scroll border">
              <pre className="text-xs">{JSON.stringify(content, null, 2)}</pre>
            </div>
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
                {paginatedContent?.map((content, idx) => (
                  <A4PageContainer
                    printMode={printMode}
                    key={idx}
                    margin={A4Margin}
                  >
                    {content.map((line, idx) => {
                      if (line.type === "header") {
                        return <HeaderLine {...line} key={idx} />;
                      } else if (line.type === "text") {
                        return (
                          <TextLine
                            {...line}
                            key={idx}
                            isApart={line.isApart}
                          />
                        );
                      } else if (line.type === "horizontalLine") {
                        return <HorizontalLine {...line} key={idx} />;
                      } else if (line.type === "subtitle") {
                        return <Subtitle {...line} key={idx} />;
                      } else if (line.type === "subheader") {
                        return <SubHeaderLine {...line} key={idx} />;
                      } else if (line.type === "richText") {
                        return <RichTextLine {...line} key={idx} />;
                      } else if (line.type === "space") {
                        return <SpaceLine {...line} key={idx} />;
                      }
                    })}
                  </A4PageContainer>
                ))}
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
  margin = 16,
}: {
  children: ReactNode;
  printMode: boolean;
  margin: number;
}) => {
  return (
    <div
      style={{
        minHeight: "11.7in",
        maxHeight: "11.7in",
        width: "8.3in",
        overflowY: "hidden",
        padding: `${margin}px`,
      }}
      className={`whitespace-pre-wrap bg-white  ${
        !printMode ? "shadow-md" : ""
      } `}
    >
      {children}
    </div>
  );
};
