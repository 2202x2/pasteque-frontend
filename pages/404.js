import Button from "../components/Button";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-5/6 justify-center items-center">
      <h1 className="font-bold text-5xl">404</h1>
      <h2 className="text-xl">Not Found</h2>
      <Button
        className="bg-red-600 p-2 rounded-md drop-shadow-lg button-text-shadow mt-2 mx-auto w-2/6 sm:w-1/6 hover:w-4/6 sm:hover:w-2/6  transition-all ease-in-out duration-300"
        text="Home"
        link="/"
        icon={
          <FaHome className="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
        }
      />
    </div>
  );
}
