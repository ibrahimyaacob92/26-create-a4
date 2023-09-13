import MyA4Document from "~/components/A4Document";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-[50vw] border-r">
          <button onClick={() => ""}>Click Me</button>
        </div>
        <div className="w-[50vw]">
          <p>Below is the pdf</p>

          <MyA4Document />
        </div>
      </div>
    </>
  );
}
