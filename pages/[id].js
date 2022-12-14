import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaCopy, FaCheck } from "react-icons/fa";
import Head from "next/head";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;

  const [text, setText] = useState();
  const [date, setDate] = useState();
  const [localeDate, setLocaleDate] = useState();
  const [url, setUrl] = useState("https://pasteque.cf/");

  const [copyIcon, setCopyIcon] = useState(
    <FaCopy className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
  );
  const [copyIconId, setCopyIconId] = useState(
    <FaCopy className="inline text-3xl ml-2" />
  );
  const [copyIconLink, setCopyIconLink] = useState(
    <FaCopy className="inline ml-2" />
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.pasteque.cf/v1/search/${id}`);
      if (response.status === 404) {
        router.push("/404");
      } else {
        const data = await response.json();
        setText(data.text);
        setDate(data.time);
      }
    }
    if (id !== undefined) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (date !== undefined) {
      setLocaleDate(new Date(Number(date)).toLocaleString());
    }
  }, [date]);

  function copyText() {
    navigator.clipboard.writeText(text);
    setCopyIcon(
      <FaCheck className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
    );
    setTimeout(() => {
      setCopyIcon(
        <FaCopy className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
      );
    }, 1500);
  }

  function copyId() {
    navigator.clipboard.writeText(id);
    setCopyIconId(<FaCheck className="inline text-3xl ml-2" />);
    setTimeout(() => {
      setCopyIconId(<FaCopy className="inline text-3xl ml-2" />);
    }, 1500);
  }

  function copyLink() {
    navigator.clipboard.writeText(`${url}${id}`);
    setCopyIconLink(<FaCheck className="inline ml-2" />);
    setTimeout(() => {
      setCopyIconLink(<FaCopy className="inline ml-2" />);
    }, 1500);
  }

  function changeUrl() {
    if (url === "https://pasteque.cf/") {
      setUrl("https://pstq.ga/");
    } else {
      setUrl("https://pasteque.cf/");
    }
  }

  return (
    <>
      <Head>
        <title>Past??que - {id}</title>
      </Head>
      <div className="h-5/6">
        <h1 className="font-bold text-4xl text-center">
          {id}
          <button onClick={copyId}>{copyIconId}</button>
        </h1>
        <h2 className="text-center mt-2">
          <span className="hover:underline cursor-pointer" onClick={changeUrl}>
            {url}
            {id}
          </span>
          <button onClick={copyLink}>{copyIconLink}</button>
        </h2>
        <h2 className="text-center mt-2">
          Uploaded on{" "}
          <span className="blur-sm hover:blur-none">{localeDate}</span>
        </h2>
        <textarea
          className="w-full h-4/6 text-black rounded border-none mt-5 p-2"
          value={text}
          readOnly
        />
        <Button
          className="bg-green-600 p-2 rounded-md drop-shadow-lg button-text-shadow mt-2 mx-auto w-1/2 hover:w-full transition-all ease-in-out duration-300 flex justify-center items-center"
          text="Copy"
          icon={copyIcon}
          onClick={copyText}
        />
      </div>
    </>
  );
}
