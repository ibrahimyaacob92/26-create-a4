import React, { ReactNode, useState } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

type Props = {
  children: ReactNode;
};

const SplitContainer = ({ children }: Props) => {
  const [a4Width, setA4Width] = useState<number>();
  return (
    <div className="h-screen">
      <Allotment onChange={(size) => setA4Width(size[1])}>
        <Allotment.Pane>
          <div className="h-screen">
            <p>A4 section width: {a4Width}</p>
            <button onClick={() => ""}>Click Me</button>
          </div>
        </Allotment.Pane>
        <Allotment.Pane>
          <div className="h-screen overflow-scroll">
            <p>Below is the pdf</p>
            {children}
          </div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};

export default SplitContainer;
