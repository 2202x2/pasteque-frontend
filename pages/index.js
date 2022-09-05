import { FaSave } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "../components/Button";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const [text, setText] = useState();
  const [errorText, setErrorText] = useState();

  const [icon, setIcon] = useState(
    <FaSave className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
  );

  async function saveText() {
    setIcon(
      <AiOutlineLoading3Quarters className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
    );
    if (text === undefined || text === "" || text === " ") {
      Router.push({
        pathname: "/code",
        query: { code: "400 Bad Request", explanation: "No text entered." },
      });
    } else {
      const response = await fetch("https://api.pasteque.cf/v1/create/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      if (response.status === 400) {
        Router.push({
          pathname: "/code",
          query: { code: "400 Bad Request", explanation: "No text entered." },
        });
      } else if (response.status === 500) {
        Router.push({
          pathname: "code",
        });
      } else {
        const data = await response.json();
        router.push(`/${data.id}`);
      }
    }
  }

  // TODO: please fix

  function changeText(t) {
    var maxLength = 10240;
    if (text === undefined || text === "") {
      if (t.length >= maxLength) {
        setErrorText(`Text is superior to ${maxLength} characters.`);
      } else {
        setErrorText("");
        setText(t);
      }
    } else if (text.length >= maxLength) {
      setErrorText(`Text is superior to ${maxLength} characters.`);
    } else {
      setErrorText("");
      setText(t);
    }
    console.log(text);
  }

  return (
    <>
      <Head>
        <title>Pastèque</title>
      </Head>
      <div className="h-5/6">
        <textarea
          className={`w-full h-5/6 text-black rounded border-none p-2 ${
            errorText ? "border-red-600 border-solid border-4" : ""
          }`}
          onChange={(e) => changeText(e.target.value)}
        >
          {text}
        </textarea>
        {errorText ? <span className="text-red-600">{errorText}</span> : ""}
        <Button
          className="bg-green-600 p-2 rounded-md drop-shadow-lg button-text-shadow mt-2 mx-auto w-1/2 hover:w-full transition-all ease-in-out duration-300 flex justify-center items-center"
          text="Save"
          icon={icon}
          onClick={saveText}
        />
      </div>
    </>
  );
}
