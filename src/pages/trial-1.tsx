import { ReactNode, useState } from "react";
import { content, contentShort } from "~/content";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const Page = () => {
  const [a4Width, setA4Width] = useState<number>();
  const scale = a4Width ? a4Width / 800 : 1;
  return (
    <div className="h-screen">
      <Allotment
        onChange={(size) => setA4Width(size[1] ? size[1] - 44 : undefined)}
      >
        <Allotment.Pane>
          <div className="h-screen ">
            <p>A4 section width: {a4Width}</p>
            <p>A4 section scale: {scale}</p>
            <button onClick={() => ""}>Click Me</button>
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
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <A4PageContainer>{content}</A4PageContainer>
              <A4PageContainer>{contentShort}</A4PageContainer>
              <A4PageContainer>{contentShort}</A4PageContainer>
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
const A4PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        minHeight: "11.7in",
        width: "8.3in",
        overflowY: "hidden",
      }}
      className="bg-white p-4 shadow-md"
    >
      {children}
    </div>
  );
};

// ? Second try varying width
// const A4PageContainer = ({
//   children,
//   width,
// }: {
//   children: ReactNode;
//   width?: number;
// }) => {
//   const scale = width ? width * 12 : 1;
//   console.log({ scale });
//   return (
//     <div
//       style={{ height: (width ?? 0) * 1.4142, width }}
//       className=" border bg-white p-4"
//     >
//       {children}
//     </div>
//   );
// };

// ? First try chatgpt gives a lot of shit
// const A4PageContainer = ({ children }: { children: ReactNode }) => (
//   <div className="mx-[calc(100/23*1vw)]  h-[calc(100/23*29.7vw)] w-[calc(100/23*21vw)] border">
//     <div className="mx-[calc(100/23*1vw)] h-[calc(100/23*27.7vw)] w-[calc(100/23*19vw)]">
//       {children}
//     </div>
//   </div>
// );
