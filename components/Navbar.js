import Button from "./Button";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row mb-7">
      <Link href="/">
        <h1 className="font-bold text-2xl leading-10 cursor-pointer transition-all ease-in-out duration-300 hover:underline hover:ml-2">
          🍉 Pastèque
        </h1>
      </Link>
      <div className="ml-auto">
        <Button
          className="bg-green-600 p-2 rounded-md drop-shadow-lg button-text-shadow transition-all ease-in-out duration-300 hover:mr-2 hover:underline"
          text="New Slice"
          link="/"
          icon={
            <BsFillPlusSquareFill className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
          }
        />
      </div>
    </div>
  );
}
