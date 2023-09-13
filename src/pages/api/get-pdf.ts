import { renderToFile } from "@react-pdf/renderer";
import { NextApiRequest, NextApiResponse } from "next";
import MyA4Document from "~/components/A4Document";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  req.statusCode = 200;

  const render = async () => {
    // await renderToFile(<MyA4Document/>, "/public/example.pdf")
  };

  res.status(200).json({ one: "two" });
}
