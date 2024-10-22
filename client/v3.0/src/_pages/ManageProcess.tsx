import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { Navbar } from "../components";
import { useState } from "react";
import { Button } from "../components/ui";

const processId = "_y0cUKnoQevsE6fOGkdQPk0dM64Ps2KS3uPzm6S17e0";

export default function ManageProcess() {
  const [data, setData] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);
  console.log({ data });

  const sendData = async () => {
    if (data.length === 0) return;

    setLoading(true);
    const msgID = await message({
      process: processId,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [{ name: "Action", value: "Send-Historical-Data" }],
      data: JSON.stringify(data),
    });
    const { Messages, Error } = await result({
      message: msgID,
      process: processId,
    });
    console.log(Messages, Error);
    setLoading(false);
    setData([]);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#111111]  w-full pt-[120px] flex flex-col items-center min-h-[96vh]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Manage Process</h1>
          {/* file input */}
          <div className="flex flex-col items-center justify-center">
            <input
              type="file"
              onChange={async (e) => {
                // read file as if json, else throw error
                if (!e.target?.files) {
                  throw new Error("No file selected");
                }
                const file = e.target.files[0];
                if (file.type !== "application/json") {
                  throw new Error("File is not a JSON file");
                }
                const text = await file.text();
                const data = JSON.parse(text);
                // if data is not an array, throw error
                if (!Array.isArray(data)) {
                  const array = Object.values(data);
                  if (!array.every((item) => typeof item === "object")) {
                    throw new Error("Data is not an array of objects");
                  }
                  setData(array);
                } else {
                  setData(data);
                }
              }}
            />

            <p className="text-white text-sm">{data ? "Data loaded - " + data.length + " rows" : "No data loaded"}</p>
            <Button onClick={sendData} disabled={loading}>
              {loading ? "Sending..." : "Send Data"}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
