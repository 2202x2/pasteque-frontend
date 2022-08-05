import { FaSave } from "react-icons/fa";
import Button from "../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState();
  async function saveText() {
    const response = await fetch("http://192.168.1.27:8001/v1/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });
    if (response.status === 500) {
      router.push(`/ServerError`);
    }
    const data = await response.json();
    router.push(`/${data.id}`);
  }
  return (
    <div className="h-5/6">
      <textarea
        className="w-full h-5/6 text-black rounded border-none p-2"
        onChange={(e) => setText(e.target.value)}
      >
        {text}
      </textarea>
      <Button
        className="bg-green-600 p-2 rounded-md drop-shadow-lg button-text-shadow mt-2 mx-auto w-1/2 hover:w-full transition-all ease-in-out duration-300 flex justify-center items-center"
        text="Save"
        icon={
          <FaSave className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
        }
        onClick={saveText}
      />
    </div>
  );
}
