import Button from "../components/Button";
import { FaHome } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Code() {
  const router = useRouter();
  const [code, setCode] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    if (router.query.code !== undefined) {
      setCode(router.query.code);
    } else {
      setCode("Server Error");
    }
    if (router.query.explanation !== undefined) {
      setExplanation(router.query.explanation);
    } else {
      setExplanation(
        "Try again or report to the GitHub repository for Pastèque"
      );
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Pastèque - {code}</title>
      </Head>
      <div className="flex flex-col w-full h-5/6 justify-center items-center">
        <div className="my-2 text-center">
          <h1 className="font-bold text-5xl my-2">{code}</h1>
          <h2 className="text-xl">{explanation}</h2>
        </div>
        <a
          href="https://github.com/2202x2/pasteque"
          className="bg-red-600 p-2 rounded-md drop-shadow-lg button-text-shadow mt-2 mx-auto w-2/6 hover:w-1/2 transition-all ease-in-out duration-300 text-center"
        >
          <Button
            text="Report"
            icon={
              <MdReport className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
            }
          />
        </a>
        <Button
          className="bg-red-600 p-2 rounded-md drop-shadow-lg button-text-shadow mt-2 mx-auto w-2/6 hover:w-1/2 transition-all ease-in-out duration-300"
          text="Home"
          link="/"
          icon={
            <FaHome className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
          }
        />
      </div>
    </>
  );
}
